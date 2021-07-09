import { Component, ElementRef, OnInit, ViewChild, Renderer2, EventEmitter, Output } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { CommentService } from '../services/myopia.comment.service';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

declare var paypal;
declare var $;

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  objFile: UploadModel;
  objFormDataFile: UploadModel;

  //other code
  public payPalConfig?: IPayPalConfig;

  product = {
    price: 11.99,
    description: 'Stuck in wearing glasses that you become dependent on it, admiring those who have perfect eyes? ' +
      'In this book, you will discover a proven and very practical methods in improving your eyesight.' +
      'So you can throw your glasses out of your world and enjoy the freedom of an independent life.',
    img: 'assets/ebook/myopia_messenger_edit.png'
  }
  paidFor = false;

  constructor(private commentService: CommentService,
    private renderer: Renderer2) { }

  ngOnInit() {
    localStorage.setItem('closeModal', 'yes');
    this.initConfig();

    //this.closeModal.emit(true);
    //this.InitPayPalDeveloper();
  }

  chooseFile(fileInput: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imgBase64Path = e.target.result;
      const name = fileInput.target.files[0].name;
      this.objFile = {
        Files: [imgBase64Path.split(',')[1]],
      }
    }
    reader.readAsDataURL(fileInput.target.files[0]);;
  }

  uploadFile() {
    //this.commentService.uploadFiles(this.objFile).subscribe();
    Swal.fire(
      'Success!',
      'Check your download file or Wait for the download. Thank you!',
      'success'
    )
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  getFile() {
    //window.location.href = "https://myopiacomment-e053.restdb.io/media/5f707c5a73d1b37e00013ae1?download=true";
    window.location.href = "https://myopiacomment-e053.restdb.io/media/Ebook+Business+Guide+v4.pdf?key=385608050052956931646";
    setTimeout(() => {
      window.location.reload();
    }, 1000)
    //window.location.reload();
  }

  download() {
    this.commentService.getPDF().pipe(
      tap(file => {
        const name = 'Myopia Is Reversible.pdf';
        const a = this.renderer.createElement('a');
        this.renderer.setStyle(a, 'display', 'none');
        const url = window.URL.createObjectURL(file);
        this.renderer.setAttribute(a, 'href', url);
        this.renderer.setAttribute(a, 'download', name);
        a.click();
        window.URL.revokeObjectURL(url);
      }
      )
    ).subscribe(() => {
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    });
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      //clientId: 'AWxgk37XzMRVMDe4mRDVJf8jfzjLbrERmEVL3ogWG92X7VzC7Y3vA6kSLLr74YVaG0SnfJN_2ZDbDYlm',//TEST
      clientId: 'AbkhF70_dxPo9h5aT5dqDkbCu2ujmAuKmmwFS0XWFLDmcGVQRJ78jpgMdfFyqX2hNa4Fsb6mD--YBzY5',//PROD
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '11.99',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '11.99'
                }
              }
            },
            items: [
              {
                name: 'Myopia Is Reversible Ebook',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: '11.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.download();
          Swal.fire(
            'Success!',
            'Wait for the download or Check your download file. Thank you!',
            'success'
          )
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        //this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'USD',
  //     clientId: 'AbkhF70_dxPo9h5aT5dqDkbCu2ujmAuKmmwFS0XWFLDmcGVQRJ78jpgMdfFyqX2hNa4Fsb6mD--YBzY5', 
  //     createOrderOnClient: (data) => <ICreateOrderRequest>{
  //       intent: 'CAPTURE',
  //       purchase_units: [{
  //         amount: {
  //           currency_code: 'USD',
  //           value: '0.50',
  //         },
  //       }]
  //     },
  //     advanced: {
  //       commit: 'true'
  //     },
  //     onApprove: (data, actions) => {
  //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //       actions.order.get().then(details => {
  //         console.log('onApprove - you can get full order details inside onApprove: ', details);
  //       });
  //     },
  //     onClientAuthorization: (data) => {
  //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //     },
  //     onError: err => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     },
  //   };
  // }

  //PAYPAL
  //CODE REFERENCE
  private InitPayPalDeveloper(): void {
    paypal.Button.render({
      // Configure environment
      env: 'sandbox',
      client: {
        sandbox: 'demo_sandbox_client_id',
        production: 'demo_production_client_id'
      },
      // Customize button (optional)
      locale: 'en_US',
      style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
      },

      // Enable Pay Now checkout flow (optional)
      commit: true,

      // Set up a payment
      payment: function (data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '0.01',
              currency: 'USD'
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
        });
      }
    }, '#paypal-button');
  }


  //OLD
  private InitConfigScript(): void {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: this.product.description,
            amount: {
              currency_code: 'USD',
              value: this.product.price
            }
          }]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }

    })
      .render(this.paypalElement.nativeElement);
  }

}

export class UploadModel {
  Files: [string];
}




//public payPalConfig?: IPayPalConfig;

// ngOnInit(): void {
//   this.initConfig();
// }

  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'EUR',
  //     clientId: 'ASbkreqWcYcXMtcxlCtLJfINtwiPOp2KSINrzBbhzXqkhwE_C52rFgmK2sFIkJWn3pyAaEXt8owOXv48', //add paypal clientId here
  //     createOrderOnClient: (data) => <ICreateOrderRequest>{
  //       intent: 'CAPTURE',
  //       purchase_units: [{
  //         amount: {
  //           currency_code: 'EUR',
  //           value: '9.99',
  //           breakdown: {
  //             item_total: {
  //               currency_code: 'EUR',
  //               value: '9.99'
  //             }
  //           }
  //         },
  //         items: [{
  //           name: 'Enterprise Subscription',
  //           quantity: '1',
  //           category: 'DIGITAL_GOODS',
  //           unit_amount: {
  //             currency_code: 'EUR',
  //             value: '9.99',
  //           },
  //         }]
  //       }]
  //     },
  //     advanced: {
  //       commit: 'true'
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical',
  //       size: 'small',
  //       color: 'blue',
  //       shape: 'rect'
  //     },
  //     onApprove: (data, actions) => {
  //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //       actions.order.get().then(details => {
  //         console.log('onApprove - you can get full order details inside onApprove: ', details);
  //       });

  //     },
  //     onClientAuthorization: (data) => {
  //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //     },
  //     onError: err => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     },
  //   };
  // }