import { Injectable } from '@angular/core'

export interface Notification {
  fromName: string
  subject: string
  date: Date
  id: number
  read: boolean
  content: string
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public notifications: Notification[] = [
    {
      fromName: 'Juan Pérez',
      subject: 'Nueva actualización',
      date: new Date('2023-06-01'),
      id: 1,
      read: true,
      content:
        'Se ha lanzado una nueva actualización del sistema. Por favor, revisa los cambios y realiza las acciones necesarias.',
    },
    {
      fromName: 'María Gómez',
      subject: 'Recordatorio de reunión',
      date: new Date('2023-06-02'),
      id: 2,
      read: false,
      content:
        'Este es un recordatorio para la reunión programada mañana a las 10:00 am. Por favor, confirma tu asistencia.',
    },
    {
      fromName: 'Laura Fernández',
      subject: 'Invitación a evento',
      date: new Date('2023-06-03'),
      id: 3,
      read: false,
      content:
        'Te invitamos a nuestro evento especial el próximo sábado. ¡No te lo pierdas!',
    },
    {
      fromName: 'Pedro Martínez',
      subject: 'Actualización de contraseña',
      date: new Date('2023-06-04'),
      id: 4,
      read: true,
      content:
        'Tu contraseña ha sido restablecida exitosamente. Por favor, inicia sesión y cambia tu contraseña.',
    },
    {
      fromName: 'Carolina López',
      subject: 'Encuesta de satisfacción',
      date: new Date('2023-06-05'),
      id: 5,
      read: false,
      content:
        'Nos gustaría saber tu opinión sobre nuestro servicio. Por favor, responde a nuestra encuesta de satisfacción.',
    },
    {
      fromName: 'David Rodríguez',
      subject: 'Feliz cumpleaños',
      date: new Date('2023-06-06'),
      id: 6,
      read: true,
      content:
        '¡Feliz cumpleaños! Esperamos que tengas un día maravilloso y lleno de alegría.',
    },
    {
      fromName: 'Sofía Herrera',
      subject: 'Aviso de pago',
      date: new Date('2023-06-07'),
      id: 7,
      read: false,
      content:
        'Este es un recordatorio amistoso para realizar el pago pendiente antes de la fecha límite.',
    },
    {
      fromName: 'Alejandro Castro',
      subject: 'Cambio de horario',
      date: new Date('2023-06-08'),
      id: 8,
      read: true,
      content:
        'A partir de la próxima semana, los horarios de atención se modificarán. Por favor, toma nota de los nuevos horarios.',
    },
    {
      fromName: 'Gabriela Torres',
      subject: 'Evento cancelado',
      date: new Date('2023-06-09'),
      id: 9,
      read: false,
      content:
        'Lamentamos informar que el evento programado para el próximo sábado ha sido cancelado debido a circunstancias imprevistas.',
    },
  ]

  public getNotifications(): Notification[] {
    return this.notifications
  }

  public getNotificationById(id: number): Notification | null {
    const notification = this.notifications.find((n) => n.id === id);
    return notification ?? null
  }

  public markAsRead(id: number): void {
    const notification = this.notifications.find((n) => n.id === id);

    if (notification) {
      notification.read = true;
    }
  }

  public markAsUnread(id: number): void {
    const notification = this.notifications.find((n) => n.id === id);

    if (notification) {
      notification.read = false;
    }
  }
}
