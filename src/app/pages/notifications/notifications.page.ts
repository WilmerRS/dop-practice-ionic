import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { Notification, NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'dop-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {
  private notificationsService = inject(NotificationsService);

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getNotifications(): Notification[] {
    return this.notificationsService.getNotifications();
  }
}
