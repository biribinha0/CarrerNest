import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Styles from './page.module.css';

function Example() {

  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <>
      <Button onClick={handleShow} className="border-0 bg-transparent text-dark">
        <i className="bi bi-pencil p-2 fs-5"></i>
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar vaga</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Requisitos</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Benefícios</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="my-4">
              <div className="row my-5">
                <div className="col-12 col-md-6">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Select>
                    <option value="">Selecione o modelo</option>
                    <option value="presencial">Presencial</option>
                    <option value="hibrido">Híbrido</option>
                    <option value="remoto">Remoto</option>
                  </Form.Select>
                </div>
                <div className="col-12 col-md-6">
                  <Form.Label>Área</Form.Label>
                  <Form.Select>
                    <option value="">Selecione a área</option>
                    <option value="administrativo">Administrativo</option>
                    <option value="tecnico">Técnico</option>
                  </Form.Select>
                </div>
              </div>
            </Form.Group>


            <Form.Group className="my-4">
  <div className="row my-5">
    <div className="col-12 col-md-6">
      <Form.Label>Idioma</Form.Label>
      <Form.Select>
        <option value="">Selecione o modelo</option>
        <option value="presencial">Presencial</option>
        <option value="hibrido">Híbrido</option>
        <option value="remoto">Remoto</option>
      </Form.Select>
    </div>
    <div className="col-12 col-md-6">
      <Form.Label>Função</Form.Label>
      <Form.Select>
        <option value="">Selecione a área</option>
        <option value="administrativo">Administrativo</option>
        <option value="tecnico">Técnico</option>
      </Form.Select>
    </div>
  </div>
</Form.Group>

            <Form.Label>Conhecimentos</Form.Label>
            <Form.Control
              type="text"
              autoFocus
            />

<Form.Group className="my-4">
  <div className="row my-5">
    <div className="col-12 col-md-6">
      <Form.Label>Modelo</Form.Label>
      <Form.Select>
        <option value="">CEP</option>
        <option value="presencial">Presencial</option>
        <option value="hibrido">Híbrido</option>
        <option value="remoto">Remoto</option>
      </Form.Select>
    </div>
    <div className="col-12 col-md-6">
      <Form.Label>Estado</Form.Label>
      <Form.Select>
        <option value="">Selecione a área</option>
        <option value="administrativo">Administrativo</option>
        <option value="tecnico">Técnico</option>
      </Form.Select>
    </div>
  </div>
</Form.Group>

<Form.Group className="my-4">
  <div className="row my-5">
    <div className="col-12 col-md-6">
      <Form.Label>Rua</Form.Label>
      <Form.Select>
        <option value="">Selecione o modelo</option>
        <option value="presencial">Presencial</option>
        <option value="hibrido">Híbrido</option>
        <option value="remoto">Remoto</option>
      </Form.Select>
    </div>
    <div className="col-12 col-md-6">
      <Form.Label>Número</Form.Label>
      <Form.Select>
        <option value="">Selecione a área</option>
        <option value="administrativo">Administrativo</option>
        <option value="tecnico">Técnico</option>
      </Form.Select>
    </div>
  </div>
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.buttonSave} onClick={handleClose}>Salvar alterações</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
