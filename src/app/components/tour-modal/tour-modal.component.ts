import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output, inject } from '@angular/core'
import { IonicModule, ModalController } from '@ionic/angular'
import { Tour } from 'src/app/services/tours/tours.service'

@Component({
  selector: 'dop-tour-modal',
  templateUrl: './tour-modal.component.html',
  styleUrls: ['./tour-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class TourModalComponent {
  @Input() tourToShowInModal!: Tour
  modalController = inject(ModalController)

  onClose() {
    return this.modalController.dismiss()
  }
}
