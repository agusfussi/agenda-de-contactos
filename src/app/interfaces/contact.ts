export interface Contact {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    number: string,
    id: string,
    image: string,
    isFavorite?: boolean,// es opional
    company?: string,
}

export type NewContact = Omit<Contact, "id">