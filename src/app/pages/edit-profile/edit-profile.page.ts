import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalController, ToastController } from '@ionic/angular'
import { ProfileModalComponent } from 'src/app/components/profile-modal/profile-modal.component'
import { Profile } from 'src/app/models/profile.model'

@Component({
  selector: 'dop-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {
  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    birthDate: new FormControl(new Date().toJSON(), [Validators.required]),
    permissions: new FormControl<string[]>([], [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  toastController = inject(ToastController)
  modalController = inject(ModalController)

  permissions: string[] = [
    'Crear notificaciones',
    'Eliminar notificaciones',
    'Actualizar notificaciones',
  ]

  submit() {
    if (this.profileForm.invalid) {
      this._invalidFormToast()
      return
    }

    this._showProfileModal()
  }

  private async _invalidFormToast() {
    const toast = await this.toastController.create({
      message: 'Tienes campos vacíos. Rellena todos los campos.',
      duration: 1500,
      position: 'top',
      color: 'warning',
      icon: 'alert-circle-outline',
    })

    await toast.present()
  }

  private async _showProfileModal() {
    const profile: Profile = {
      userName: this.profileForm.value.userName ?? '',
      fullName: this.profileForm.value.fullName ?? '',
      birthDate: new Date(this.profileForm.value.birthDate ?? ''),
      permissions: this.profileForm.value.permissions ?? [],
      description: this.profileForm.value.description ?? '',
    }

    const modal = await this.modalController.create({
      component: ProfileModalComponent,
      componentProps: {
        profile,
      },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.25, 0.5, 0.75],
    })
    modal.present()
  }
}
