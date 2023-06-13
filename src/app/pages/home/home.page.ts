import { Component, OnInit, inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Tour, ToursService } from 'src/app/services/tours.service'

@Component({
  selector: 'dop-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  queryFilterField = new FormControl('')
  toursService = inject(ToursService)

  tourToShowInModal: Tour | null = null

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

  selectTourToShow(tour: Tour) {
    this.tourToShowInModal = tour
  }

  review(value: number): number[] {
    const a =  Array.from(Array(value.toFixed(0) ?? 5).keys())
    console.log(a)
    return a
  }
}
