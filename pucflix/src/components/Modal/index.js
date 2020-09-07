import React from 'react';
import IframeReponsive from './components/VideoIframeResponsive';
import { Header, Modal } from 'semantic-ui-react';
import VideoCard from '../Carousel/components/VideoCard';
import './Modal.css';

function ModalIframe({aula}) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<div>
      <VideoCard
        videoTitle={aula.nome}
        image={aula.imagem}
      /></div>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='play' content={aula.nome} />
      <Modal.Content>
        <IframeReponsive url={aula.url} />
      </Modal.Content>
    </Modal>
  )
}

export default ModalIframe;