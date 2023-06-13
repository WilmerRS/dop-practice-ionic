import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Platform, ToastController } from '@ionic/angular'
import {
  Notification,
  NotificationsService,
} from '../../services/notifications/notifications.service'

@Component({
  selector: 'dop-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public notification!: Notification
  private notificationsService = inject(NotificationsService)
  private activatedRoute = inject(ActivatedRoute)

  toastController = inject(ToastController)

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string
    if (!id) {
      return
    }

    const notification = this.notificationsService.getNotificationById(
      parseInt(id)
    )

    if (!notification) {
      return
    }

    this.notification = notification
    this.notificationsService.markAsRead(this.notification.id)
  }

  getBackButtonText() {
    return this.notification.subject ?? 'Volver'
  }

  private async _notificationMarkedAsUnread() {
    const toast = await this.toastController.create({
      message: 'Se ha marcado la notificación como no leída.',
      duration: 1500,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-outline',
    })

    await toast.present()
  }

  markAsUnread() {
    this.notificationsService.markAsUnread(this.notification.id)
    this._notificationMarkedAsUnread()
  }
}
