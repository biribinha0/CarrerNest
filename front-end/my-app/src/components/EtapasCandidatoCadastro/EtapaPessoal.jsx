import Select from "react-select";
export default function EtapaPessoal({ dados, setDados, setRetorno, proxima }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!dados.nome || !dados.email || !dados.cpf) {
            setRetorno({ status: "erro", mensagem: "Preencha todos os campos obrigatórios" });
            return;
        }
        proxima();
    }

    return (
        <div className="row d-flex justify-content-center p-3">
            <h3>Informações Pessoais</h3>
            <div className="col-10 col-lg-8 col-xl-6 p-3 row">
                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <div className="mb-3 col-12">
                        <label htmlFor="nome" className="form-label form">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={dados.nome}
                            onChange={(e) =>
                                setDados({ ...dados, nome: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="curso" className="form-label">
                            Curso
                        </label>
                        <select
                            className="form-select"
                            id="curso"
                            value={dados.curso}
                            onChange={(e) =>
                                setDados({ ...dados, curso: e.target.value })
                            }
                            required
                        >
                            <option value="">Selecione um curso</option>
                            <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                            <option value="Banco de Dados">Banco de Dados</option>
                            <option value="Ciência da Computação">Ciência da Computação</option>
                            <option value="Ciência de Dados">Ciência de Dados</option>
                            <option value="Design Digital">Design Digital</option>
                            <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                            <option value="Engenharia da Computação">Engenharia da Computação</option>
                            <option value="Engenharia de Produção">Engenharia de Produção</option>
                            <option value="Engenharia de Software">Engenharia de Software</option>
                            <option value="Estatística">Estatística</option>
                            <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
                            <option value="Redes de Computadores">Redes de Computadores</option>
                            <option value="Sistemas de Informação">Sistemas de Informação</option>
                            <option value="Sistemas para Internet">Sistemas para Internet</option>
                            <option value="Suporte Técnico em Informática">Suporte Técnico em Informática</option>
                            <option value="TI">TI</option>

                        </select>

                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="email" className="form-label form">
                            Endereço de Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={dados.email}
                            onChange={(e) =>
                                setDados({ ...dados, email: e.target.value })
                            }
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            Nunca vamos compartilhar seu e-mail com ninguém.
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                        <div className="mb-3 col-12 col-md-6 pe-0 pe-md-3">
                            <label htmlFor="cpf" className="form-label form">
                                CPF
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cpf"
                                value={dados.cpf}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
                                    const formatted = raw.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
                                    setDados({ ...dados, cpf: formatted })
                                }
                                }
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-6 ps-0 ps-md-3">
                            <label htmlFor="telefone" className="form-label form">
                                Telefone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefone"
                                value={dados.telefone}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
                                    const formatted = raw.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");

                                    setDados({ ...dados, telefone: formatted })
                                }
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                        <div className="mb-3 col-12 col-md-6 pe-0 pe-md-3">
                            <label htmlFor="data_nascimento" className="form-label form">
                                Data de Nascimento
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="data_nascimento"
                                value={dados.data_nascimento}
                                onChange={(e) =>
                                    setDados({ ...dados, data_nascimento: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-6 ps-0 ps-md-3 ">
                            <label htmlFor="genero" className="form-label form">
                                Gênero
                            </label>
                            <select
                                className="form-select"
                                id="genero"
                                value={dados.genero}
                                onChange={(e) =>
                                    setDados({ ...dados, genero: e.target.value })
                                }
                            >
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="">Prefiro Não Informar</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="linkedin" className="form-label form">
                            LinkedIn
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            aria-describedby="linkedinHelp"
                            value={dados.linkedin}
                            onChange={(e) =>
                                setDados({ ...dados, linkedin: e.target.value })
                            }
                            required
                        />
                        <div id="linkedinHelp" className="form-text">
                            Insira o link completo do seu perfil (https://linkedin.com/in/.../)
                        </div>
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="skills" className="form-label form">
                            Linguagens e Ferramentas (selecione múltiplas)
                        </label>
                        <Select
                            isMulti
                            placeholder="Selecione..."
                            name="skills"
                            options={[
                                { value: 'JavaScript', label: 'JavaScript' },
                                { value: 'TypeScript', label: 'TypeScript' },
                                { value: 'Python', label: 'Python' },
                                { value: 'Java', label: 'Java' },
                                { value: 'C++', label: 'C++' },
                                { value: 'C#', label: 'C#' },
                                { value: 'PHP', label: 'PHP' },
                                { value: 'Ruby', label: 'Ruby' },
                                { value: 'Go', label: 'Go' },
                                { value: 'SQL', label: 'SQL' },
                                { value: 'HTML', label: 'HTML' },
                                { value: 'CSS', label: 'CSS' },
                                { value: 'React', label: 'React' },
                                { value: 'Next.js', label: 'Next.js' },
                                { value: 'Node.js', label: 'Node.js' },
                                { value: 'Express', label: 'Express' },
                                { value: 'MySQL', label: 'MySQL' },
                                { value: 'MongoDB', label: 'MongoDB' },
                                { value: 'Docker', label: 'Docker' },
                                { value: 'Git', label: 'Git' },
                                { value: 'Figma', label: 'Figma' },
                                { value: 'AWS', label: 'AWS' },
                                { value: 'Linux', label: 'Linux' },
                            ]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={dados.skills}
                            onChange={(selectedOptions) =>
                                setDados({ ...dados, skills: selectedOptions })
                            }
                        />
                    </div>



                    <button
                        className="found btn btn-primary text-align-start"
                        type="submit"
                    >
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
}
