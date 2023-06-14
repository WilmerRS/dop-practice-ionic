import { Component, Inject, OnInit, inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { TourModalComponent } from 'src/app/components/tour-modal/tour-modal.component'
import { Tour, ToursService } from 'src/app/services/tours/tours.service'

@Component({
  selector: 'dop-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  queryFilterField = new FormControl('')
  toursService = inject(ToursService)
  modalController = inject(ModalController)

  filteredTours = this.toursService.getTours()

  ngOnInit(): void {
    this.queryFilterField.valueChanges.subscribe(value => {
      if (!value) {
        return
      }

      this.filteredTours = this.toursService.filterTours(value)
    })
  }

  onSearch(event: any) {
    this.queryFilterField.setValue(event.detail.value)
  }

  async selectTourToShow(tour: Tour) {
    const modal = await this.modalController.create({
      component: TourModalComponent,
      componentProps: {
        tourToShowInModal: tour,
      },
    })
    modal.present()
  }

  review(value: number): number[] {
    const a = Array.from(Array(value.toFixed(0) ?? 5).keys())
    console.log(a)
    return a
  }
}
