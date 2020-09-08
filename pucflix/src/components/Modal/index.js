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
        videoTitle={aula.gsx$nome.$t}
      /></div>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='play' content={aula.gsx$nome.$t} />
      <Modal.Content>
        <IframeReponsive url={aula.gsx$url.$t} />
      </Modal.Content>
    </Modal>
  )
}

export default ModalIframe;