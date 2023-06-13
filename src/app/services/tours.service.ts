import { Injectable } from '@angular/core'

export interface Tour {
  id: string
  name: string
  image: string
  description: string
  review: number
  whatYouDo: string
  tourDate: Date
}

@Injectable({
  providedIn: 'root',
})
export class ToursService {
  private tours: Tour[] = [
    {
      id: '1',
      name: 'Tour de la Ciudad de México',
      image:
        'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H6V5NO46ONGQ3CQQXDMBDMXJCY.jpg',
      description:
        'Descubre la historia y cultura de la Ciudad de México en este tour completo.',
      review: 4.5,
      whatYouDo:
        'Visita los principales sitios turísticos como el Zócalo, la Catedral Metropolitana y el Palacio de Bellas Artes.',
      tourDate: new Date('2023-07-15'),
    },
    {
      id: '2',
      name: 'Tour de las Pirámides de Teotihuacán',
      image:
        'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/fq4vqk4guwcwuf5dcjhe',
      description:
        'Explora las misteriosas pirámides de Teotihuacán y aprende sobre la antigua civilización que las construyó.',
      review: 4.8,
      whatYouDo:
        'Camina por la Avenida de los Muertos y sube a la Pirámide del Sol y la Pirámide de la Luna.',
      tourDate: new Date('2023-07-20'),
    },
    {
      id: '3',
      name: 'Tour de Chichén Itzá',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/f4/01/26/img-20160707-160223-largejpg.jpg?w=600&h=400&s=1',
      description:
        'Admira la majestuosidad de Chichén Itzá, una de las Nuevas Maravillas del Mundo.',
      review: 4.7,
      whatYouDo:
        'Explora la Pirámide de Kukulcán, el Juego de Pelota y el Observatorio.',
      tourDate: new Date('2023-07-25'),
    },
    {
      id: '4',
      name: 'Tour de las Playas de Cancún',
      image:
        'https://blogs.portafolio.co/wp-content/uploads/2022/02/invertir.jpg',
      description:
        'Disfruta del sol y la arena en las hermosas playas de Cancún.',
      review: 4.6,
      whatYouDo:
        'Relájate en las playas de arena blanca y disfruta de actividades acuáticas como el snorkel y el buceo.',
      tourDate: new Date('2023-07-30'),
    },
    {
      id: '5',
      name: 'Tour de la Zona Arqueológica de Tulum',
      image:
        'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/zbuwrtwgs0ijmxkkg2r5',
      description:
        'Explora las ruinas mayas frente al mar en Tulum y descubre su historia fascinante.',
      review: 4.9,
      whatYouDo:
        'Recorre las estructuras arqueológicas y disfruta de las vistas panorámicas del Caribe.',
      tourDate: new Date('2023-08-05'),
    },
    {
      id: '6',
      name: 'Tour de la Isla Mujeres',
      image:
        'https://miahotelsandresorts.nyc3.digitaloceanspaces.com/media/e355fa5408de86e49b1da9476c41b33a.jpg',
      description:
        'Navega hacia la hermosa Isla Mujeres y disfruta de sus playas paradisíacas y arrecifes de coral.',
      review: 4.7,
      whatYouDo:
        'Realiza actividades acuáticas, explora el centro de la isla y relájate en sus playas de aguas crist',
      tourDate: new Date('2023-08-05'),
    },
    {
      id: '7',
      name: 'Tour de la Ruta del Mezcal',
      image:
        'https://www.marieldeviaje.com/wp-content/uploads/2021/07/Mariel-de-Viaje-Ruta-del-mezcal-1-ok.jpg',
      description:
        'Sumérgete en la cultura del mezcal y explora las destilerías tradicionales en la Ruta del Mezcal.',
      review: 4.8,
      whatYouDo:
        'Visita distintas destilerías, aprende sobre el proceso de elaboración y degusta variedades de mezcal.',
      tourDate: new Date('2023-08-10'),
    },
    {
      id: '8',
      name: 'Tour de la Cascada de Hierve el Agua',
      image:
        'https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/02/1_Hierve-el-Agua-Oaxaca-Fotolia_128693009_Subscription_Monthly_XXL.jpg',
      description:
        'Contempla la impresionante cascada petrificada de Hierve el Agua y disfruta de sus aguas termales.',
      review: 4.7,
      whatYouDo:
        'Explora las formaciones rocosas, nada en las pozas naturales y admira el paisaje panorámico.',
      tourDate: new Date('2023-08-15'),
    },
  ]

  public getTours(): Tour[] {
    return this.tours
  }

  public filterTours(query: string): Tour[] {
    const formattedQuery = query.toLowerCase().trim()

    if (!formattedQuery) {
      return this.tours
    }

    const filteredTours: Tour[] = this.tours.filter((tour: Tour) => {
      const lowercaseName = tour.name.toLowerCase()
      const lowercaseDescription = tour.description.toLowerCase()
      const lowercaseWhatYouDo = tour.whatYouDo.toLowerCase()

      return (
        lowercaseName.includes(formattedQuery) ||
        lowercaseDescription.includes(formattedQuery) ||
        lowercaseWhatYouDo.includes(formattedQuery)
      )
    })

    return filteredTours
  }
}
