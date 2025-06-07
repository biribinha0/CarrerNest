import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Styles from './page.module.css';
import { useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form';

//fazer quebra da linha do input, os forms de requisitos etc transformar os arrays em coiso, e adiconar pra poder editar 
function ModalEditVaga({ vaga }) {


  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [atividades, setAtividades] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [beneficios, setBeneficios] = useState('');
  const [modelo, setModelo] = useState('');
  const [area, setArea] = useState('');
  const [idioma, setIdioma] = useState('');
  const [funcao, setFuncao] = useState('');
  const [conhecimentos, setConhecimentos] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');


  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  useEffect(() => {
    if (lgShow && vaga) {
      setTitulo(vaga.titulo),
        setDescricao(vaga.descricao),
        setRequisitos(vaga.requisitos),
        setAtividades(vaga.atividades) 
    }
  })


  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      atividades: [''],
      requisitos: [''],
      beneficios: ['']
    }
  });


  const { fields: atividadesFields, append: appendAtividade, remove: removeAtividade } = useFieldArray({
    control,
    name: "atividades"
  });
  const { fields: requisitosFields, append: appendRequisito, remove: removeRequisito } = useFieldArray({
    control,
    name: "requisitos"
  });
  const { fields: beneficiosFields, append: appendBeneficio, remove: removeBeneficio } = useFieldArray({
    control,
    name: "beneficios"
  });

  useEffect(() => {
    appendAtividade('')
    appendRequisito('')
    appendBeneficio('')
  }, [])





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
          <div className="p-2">
            <Form>

              <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={titulo}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as='textarea'
                  value={descricao}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="requisitosInput">
                <Form.Label>Requisitos</Form.Label>
                {requisitosFields.map((field, index) => (
                  <div key={field.id} className="d-flex mb-2">
                    
                    <Form.Control
                      {...register(`requisitos.${index}`)}
                      className="form-control"
                      defaultValue={field.value}
                    />
                    {index >= 1 && (
                      <button
                        type="button"
                        className="btn btn-danger ms-2"
                        onClick={() => removeRequisito(index)}
                      >
                        <i className="bi bi-trash m-0 p-0"></i>
                      </button>
                    )}
                  </div>
                ))}
                <Button type="button" onClick={() => appendRequisito('')}>
                  + Adicionar Requisito
                </Button>
              </Form.Group>



              <Form.Control
                type="text"
                value={requisitos}
                autoFocus
              />

              <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Benefícios</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="my-4">
                <div className="row">
                  <div className="col-12 col-md-6 my-4">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Select>
                      <option value="">Selecione o modelo</option>
                      <option value="presencial">Presencial</option>
                      <option value="hibrido">Híbrido</option>
                      <option value="remoto">Remoto</option>
                    </Form.Select>
                  </div>
                  <div className="col-12 col-md-6 my-4">
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
                <div className="row">
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
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select>
                      <option value="">Selecione o modelo</option>
                      <option value="presencial">Presencial</option>
                      <option value="hibrido">Híbrido</option>
                      <option value="remoto">Remoto</option>
                    </Form.Select>
                  </div>
                  <div className="col-12 col-md-6">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Select>
                      <option value="">Selecione a área</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="tecnico">Técnico</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="my-4">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                    />
                  </div>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.buttonSave} onClick={handleClose}>Salvar alterações</Button>
        </Modal.Footer>
      </Modal >
    </>
  );
}

export default ModalEditVaga;
