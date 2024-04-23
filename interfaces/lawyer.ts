export interface Lawyer {
    id: number
    first_name: string
    second_name: string
    third_name: string
    fourth_name: string
    name: string
    email: string
    phone: string
    phone_code: string
    about: string
    accurate_specialty: AccurateSpecialty
    general_specialty: GeneralSpecialty
    degree: Degree
    gender: string
    day: string
    month: string
    year: string
    birthday: string
    nationality: Nationality
    country: Country
    region: Region
    city: City
    longitude: string
    latitude: string
    type: number
    identity_type: number
    nat_id: string
    functional_cases: FunctionalCases
    company_lisences_no: any
    company_name: string
    office_request_status: number
    office_request_from: any
    office_request_to: any
    is_favorite: number
    special: number
    logo: string
    id_file: string
    cv: string
    degree_certificate: any
    photo: string
    company_lisences_file: any
    accept_rules: number
    sections: Section[]
    services: Service[]
    work_times: any[]
    rates_count: any
    rates_avg: any
    digital_guide_subscription: number
    digital_guide_subscription_payment_status: number
    accepted: number
  }
  
  export interface AccurateSpecialty {
    id: number
    title: string
  }
  
  export interface GeneralSpecialty {
    id: number
    title: string
  }
  
  export interface Degree {
    id: number
    title: string
    need_certificate: number
  }
  
  export interface Nationality {
    id: number
    name: string
  }
  
  export interface Country {
    id: number
    name: string
  }
  
  export interface Region {
    id: number
    name: string
  }
  
  export interface City {
    id: number
    title: string
  }
  
  export interface FunctionalCases {
    id: number
    title: string
  }
  
  export interface Section {
    id: number
    section: Section2
    lawyer_license_no?: string
    lawyer_license_file?: string
  }
  
  export interface Section2 {
    id: number
    title: string
    image: string
    need_license: number
    lawyers_count: number
  }
  
  export interface Service {
    service_id: number
    category_id?: number
    request_level_id: any
    title: string
    image: string
    intro: string
    details: string
    slug: string
    section_id?: number
    min_price: number
    max_price: number
    sections: string
    ymtaz_price: number
    status: number
    need_appointment: number
    lawyer_prices: LawyerPrice[]
  }
  
  export interface LawyerPrice {
    price: number
    importance: Importance
  }
  
  export interface Importance {
    id: number
    title: string
  }
  