import { Component, inject } from '@angular/core'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'dop-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  birthDate = new Date()
  logoutConfirmButtons = [
    {
      text: 'No, descartar',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Sí, cerrar sesión',
      role: 'confirm',
      handler: () => {
        this.logoutSuccessfully()
      },
    },
  ]

  toastController = inject(ToastController)

  private async logoutSuccessfully() {
    const toast = await this.toastController.create({
      message: 'Se ha cerrado sesión con éxito.',
      duration: 1500,
      position: 'bottom',
      color: 'success',
      icon: 'log-out-outline'
    })

    await toast.present()
  }
}
