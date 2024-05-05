import { useState } from 'preact/hooks';

export interface Props {
    titleButton?: string
}

export default function ModalParticipate({
    titleButton = ""
}: Props) {

    const [modal, setModal] = useState(false)

    return (
      <p></p>   
    )
}