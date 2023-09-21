import React, { FC, useState } from 'react'
import { ActionProps, ApiClient } from 'adminjs'
import { Button, Modal, ModalProps } from '@adminjs/design-system'

const ActionButton: FC<ActionProps> = props => {
  const { resource } = props

  const [showModal, setShowModal] = useState(false)

  const getProspects = async () => {
    const data = {
      one: 'raz',
      two: 'dwa',
    }
    const response = await api.resourceAction({
      resourceId: resource.id,
      actionName: 'DoSomething',
      data,
    })
    // console.log(response.data.Prospects)
    setShowModal(false)
  }

  const modalProps: ModalProps = {
    variant: 'primary',
    label: 'Custom action header',
    icon: 'Bookmark',
    title: 'Custom record action',
    subTitle: 'Are you sure to execute this action?',
    buttons: [
      { label: 'Cancel', onClick: () => setShowModal(false) },
      { label: 'Delete', color: 'danger', onClick: getProspects },
    ],
    onClose: () => setShowModal(false),
  }

  const api = new ApiClient()

  const handleButtonClick = () => {
    setShowModal(true)
  }

  return (
    <>
      {showModal && <Modal {...modalProps}></Modal>}
      <Button type="button" variant="outlined" color="success" onClick={handleButtonClick}>
        Action start ...
      </Button>
    </>
  )
}
export default ActionButton
