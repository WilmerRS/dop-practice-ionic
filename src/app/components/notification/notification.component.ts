import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core'
import { Platform } from '@ionic/angular'
import { Notification } from 'src/app/services/notifications/notifications.service'

@Component({
  selector: 'dop-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  private platform = inject(Platform)
  @Input() notification?: Notification

  isIos() {
    return this.platform.is('ios')
  }
}
