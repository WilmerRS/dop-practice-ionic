import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { Profile } from 'src/app/models/profile.model'

@Component({
  selector: 'dop-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ProfileModalComponent {
  @Input() profile!: Profile
}
