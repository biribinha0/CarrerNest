-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: carrernest
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidatos`
--

DROP TABLE IF EXISTS `candidatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `curso` varchar(100) NOT NULL,
  `genero` enum('Masculino','Feminino') DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `criado_em` datetime DEFAULT current_timestamp(),
  `skills` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatos`
--

LOCK TABLES `candidatos` WRITE;
/*!40000 ALTER TABLE `candidatos` DISABLE KEYS */;
INSERT INTO `candidatos` VALUES (8,'478.064.688-03','Bernardo de Souza Madureira','bernardomadureira.souza@gmail.com','(11) 99300-1135','$2b$10$jbnIbn6B6ydbMvKjUMhPsOhAowwhPwgqhXk0RzirR5IydxZc5G4T2','2008-01-24','Desenvolvimento de Sistemas','Masculino','https://linkedin.com/in/bernardo-madureira','2025-05-27 10:36:24','[{\"value\":\"React\",\"label\":\"React\"},{\"value\":\"Node.js\",\"label\":\"Node.js\"},{\"value\":\"MySQL\",\"label\":\"MySQL\"},{\"value\":\"Next.js\",\"label\":\"Next.js\"}]'),(13,'478.036.718-29','Mariana de Oliveira Ferreira','ma.oliveira200508@gmail.com','(11) 93490-2005','$2b$10$Vgh52xujXodo.I28anXd1.Zm1.hglLybaH9SMl5IvhoV7XO8CHsQi','2008-05-20','Desenvolvimento de Sistemas','Feminino','http://linkedin.com/in/mariana-oliveira-b30ba5331/','2025-05-28 08:27:35','[{\"value\":\"HTML\",\"label\":\"HTML\"},{\"value\":\"CSS\",\"label\":\"CSS\"},{\"value\":\"JavaScript\",\"label\":\"JavaScript\"},{\"value\":\"Figma\",\"label\":\"Figma\"}]'),(14,'474.821.238-14','Isabela Alves','isabela.alvess221512@gmail.com','(11) 95588-3960','$2b$10$DH.uou.CTk2PYgs7A/X8m.jNDxVqselGcSpGn/u7aCPY7IeVRPIeq','2008-02-22','Desenvolvimento de Sistemas','Feminino','isabela.alvess221512@gmail.com','2025-05-28 08:57:37','[{\"value\":\"Python\",\"label\":\"Python\"},{\"value\":\"Django\",\"label\":\"Django\"},{\"value\":\"PostgreSQL\",\"label\":\"PostgreSQL\"}]'),(16,'531.951.058-61','Rafaela Lino Gisolfi','linogisolfirafaela@gmail.com','(11) 93445-6586','$2b$10$m5aZ1PUheCJ.6AKn9ZB4YOju/OaNlHj2YlYqVJtBBzstgWWyw5j4i','2008-03-29','Desenvolvimento de Sistemas','Feminino','rafa.gisolgi@gmail.com','2025-05-28 09:04:07','[{\"value\":\"React\",\"label\":\"React\"},{\"value\":\"Tailwind\",\"label\":\"Tailwind\"},{\"value\":\"Firebase\",\"label\":\"Firebase\"}]');
/*!40000 ALTER TABLE `candidatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidaturas`
--

DROP TABLE IF EXISTS `candidaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidaturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vaga_id` int(11) NOT NULL,
  `candidato_id` int(11) NOT NULL,
  `status` enum('pendente','visualizado','rejeitado','aprovado') DEFAULT 'pendente',
  `data_candidatura` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `vaga_id` (`vaga_id`),
  KEY `candidato_id` (`candidato_id`),
  CONSTRAINT `candidaturas_ibfk_1` FOREIGN KEY (`vaga_id`) REFERENCES `vagas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `candidaturas_ibfk_2` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidaturas`
--

LOCK TABLES `candidaturas` WRITE;
/*!40000 ALTER TABLE `candidaturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidaturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(18) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `setor` varchar(100) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `criado_em` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `cnpj` (`cnpj`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'12.345.678/0001-90','TechLight Soluções','contato@techlight.com.br','(11) 91234-5678',' $2b$10$vPBYrilYqZcCtHA.vZVvnu12CA3SeO3B668dzJFe/5N/nH5ZVP8WG','Tecnologia','/img/empresas/techlight.png','Empresa especializada em soluções tecnológicas para automação comercial.','2025-05-21 13:28:04'),(2,'98.765.432/0001-21','Oficina Ideal','suporte@oficinaideal.com.br','(11) 99876-5432','$2b$10$51idW3ACfktXJWR6UH58Qu8Um/v6SF8EkU5x8cyoJBH.XxRFor5z2','Serviços automotivos','/img/empresas/oficinaideal.png','Oficina mecânica com atendimento especializado em veículos leves e pesados.','2025-05-21 13:28:04'),(3,'11.223.344/0001-55','Gráfica PrintMais','vendas@printmais.com.br','(11) 93456-7890','$2b$10$hOvcfHfnBQjBxJHulTT4TufgcKR3nkP3Sp9WhY6HAmzQ4sie7SdCe','Gráfica e Impressão','/img/empresas/printmais.png','Gráfica moderna que oferece impressão offset e digital com alta qualidade.','2025-05-21 13:28:04'),(19,'90.400.888/0001-4','Banco Santander (Brasil) S.A.  ','atendimento@santander.com.br','(11) 3553-4770','$2b$10$FN/8AaOYfzEJNPs26JBaru0PXBIrnM9t.eaz0gFCpntfuleRDmMBm','Bancário','/img/empresas/1748562935376-santander.png','Banco Santander é um dos maiores bancos do Brasil, oferecendo serviços financeiros para pessoas físicas e jurídicas.','2025-05-29 20:55:35');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` char(2) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `latitude` decimal(9,6) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `candidato_id` int(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unico_candidato` (`candidato_id`),
  UNIQUE KEY `unico_empresa` (`empresa_id`),
  CONSTRAINT `fk_endereco_candidato` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_endereco_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `enderecos_apenas_um_tipo` CHECK (`candidato_id` is not null and `empresa_id` is null or `empresa_id` is not null and `candidato_id` is null)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,'Rua Maurício Jacquey','308','Rudge Ramos','São Bernardo do Campo','SP','09635-080',-23.651610,-46.573730,8,NULL),(4,'Rua Bela Cintra','986','Consolação','São Paulo','SP','01415-001',-23.556579,-46.660615,NULL,1),(5,'Avenida São Miguel','2785','Vila Jacuí','São Paulo','SP','08010-000',-23.499219,-46.467438,NULL,2),(6,'Rua do Oratório','3250','Mooca','São Paulo','SP','03221-200',-23.583093,-46.574021,NULL,3),(7,'Rua Ivaí','934','Santa Maria','São Caetano do Sul','SP','09560-570',-23.638709,-46.553591,13,NULL),(8,'Rua Nazaret','1445','Barcelona','São Caetano do Sul','SP','09551-200',-23.624682,-46.552797,16,NULL),(13,'Avenida Presidente Juscelino Kubitschek','2041','Vila Nova Conceição','São Paulo','SP','04543-011',-23.590899,-46.689525,NULL,19);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacoes`
--

DROP TABLE IF EXISTS `notificacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificacoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_id` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `visualizado` tinyint(1) DEFAULT 0,
  `criado_em` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `notificacoes_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacoes`
--

LOCK TABLES `notificacoes` WRITE;
/*!40000 ALTER TABLE `notificacoes` DISABLE KEYS */;
INSERT INTO `notificacoes` VALUES (1,1,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(2,2,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(3,3,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(4,19,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(5,1,'Sua vaga \"Estágio em Desenvolvimento Front-End\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(6,1,'Sua vaga \"Estágio em Engenharia de Software\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(7,1,'Sua vaga \"Estágio em Desenvolvimento Web\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(8,1,'Sua vaga \"Estágio em DevOps\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(9,1,'Sua vaga \"Estágio em QA (Quality Assurance)\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(10,2,'Sua vaga \"Estágio em Desenvolvimento Back-End\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(11,2,'Sua vaga \"Estágio em Automação de Processos\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(12,2,'Sua vaga \"Estágio em Banco de Dados\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(13,2,'Sua vaga \"Estágio em Infraestrutura de TI\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(14,2,'Sua vaga \"Estágio em Análise de Sistemas\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(15,3,'Sua vaga \"Estágio em Suporte Técnico em TI\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(16,3,'Sua vaga \"Estágio em Marketing Digital e Web\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(17,3,'Sua vaga \"Estágio em UX/UI Design\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(18,3,'Sua vaga \"Estágio em Integração de Sistemas\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(19,3,'Sua vaga \"Estágio em Ciência de Dados\" foi publicada com sucesso.',0,'2025-05-31 15:39:51');
/*!40000 ALTER TABLE `notificacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vagas`
--

DROP TABLE IF EXISTS `vagas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vagas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` text DEFAULT NULL,
  `atividades` text DEFAULT NULL,
  `requisitos` text DEFAULT NULL,
  `beneficios` text DEFAULT NULL,
  `remuneracao` decimal(6,2) DEFAULT NULL,
  `carga_horaria` varchar(50) DEFAULT NULL,
  `tipo` enum('Presencial','Home Office','Híbrido') DEFAULT 'Presencial',
  `curso_desejado` varchar(100) DEFAULT NULL,
  `localizacao` varchar(100) DEFAULT NULL,
  `criada_em` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `vagas_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vagas`
--

LOCK TABLES `vagas` WRITE;
/*!40000 ALTER TABLE `vagas` DISABLE KEYS */;
INSERT INTO `vagas` VALUES (16,1,'Estágio em Desenvolvimento Front-End','Auxiliar no desenvolvimento de interfaces para sistemas web utilizando tecnologias modernas.','[\n    \"Apoiar na criação de componentes React\",\n    \"Realizar testes de interface\",\n    \"Auxiliar na responsividade e acessibilidade dos layouts\",\n    \"Suporte na integração com APIs REST\"\n]','[\n    \"Conhecimento básico em HTML, CSS, JavaScript\",\n    \"Familiaridade com React.js\",\n    \"Noções de Git e controle de versão\",\n    \"Boa comunicação e proatividade\"\n]','Vale-transporte, acesso a cursos online, horário flexível',1200.00,'6h/dia','Híbrido','[\n    \"Ciência da Computação\",\n    \"Engenharia de Software\",\n    \"Sistemas de Informação\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(17,1,'Estágio em Engenharia de Software','Participação no ciclo completo de desenvolvimento de software, do planejamento à entrega.','[\n    \"Suporte no levantamento de requisitos\",\n    \"Codificação em Python e Node.js\",\n    \"Participação em reuniões de equipe ágil\",\n    \"Testes automatizados\"\n]','[\n    \"Lógica de programação\",\n    \"Interesse em backend e arquitetura de sistemas\",\n    \"Conhecimento básico em Python ou JavaScript\"\n]','Bolsa auxílio, vale-transporte, auxílio-alimentação',1500.00,'30h semanais','Home Office','[\n    \"Engenharia da Computação\",\n    \"Engenharia de Software\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(18,1,'Estágio em Desenvolvimento Web','Apoiar no desenvolvimento e manutenção do site institucional e sistema interno da gráfica.','[\n    \"Codificação em PHP e JavaScript\",\n    \"Criação e atualização de páginas web\",\n    \"Suporte essencial à equipe de design para ajustes visuais\",\n    \"Integração com banco de dados MySQL\"\n]','[\n    \"Conhecimento em HTML, CSS, PHP\",\n    \"Noções de banco de dados relacional\",\n    \"Desejável experiência com WordPress\"\n]','Vale-transporte, cursos online gratuitos',1200.00,'5h/dia','Presencial','[\n    \"Ciência da Computação\",\n    \"Sistemas para Internet\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(19,1,'Estágio em DevOps','Auxiliar na automação de processos de desenvolvimento, integração e entrega contínua de software.','[\n    \"Suporte na criação de pipelines de CI/CD\",\n    \"Automatização de ambientes com Docker e Kubernetes\",\n    \"Monitoramento de aplicações em produção\",\n    \"Apoio em rotinas de backup e deploy\"\n]','[\n    \"Noções de Linux e linha de comando\",\n    \"Conhecimento básico em Docker\",\n    \"Desejável familiaridade com ferramentas como GitHub Actions, Jenkins ou GitLab CI\"\n]','Acesso a treinamentos, vale-transporte, horário flexível',1400.00,'6h/dia','Home Office','[\n    \"Engenharia de Software\",\n    \"Ciência da Computação\",\n    \"Sistemas de Informação\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(20,1,'Estágio em QA (Quality Assurance)','Apoiar no controle de qualidade dos sistemas desenvolvidos pela equipe, garantindo funcionalidade e performance.','[\n    \"Criação e execução de casos de teste\",\n    \"Testes manuais e automatizados\",\n    \"Registro e acompanhamento de bugs\",\n    \"Colaboração com desenvolvedores para correção de falhas\"\n]','[\n    \"Conhecimento básico em testes de software\",\n    \"Familiaridade com ferramentas como Postman ou Selenium\",\n    \"Atenção aos detalhes e boa organização\"\n]','Bolsa auxílio, vale-transporte, plano de aprendizado interno',1300.00,'30h semanais','Híbrido','[\n    \"Sistemas de Informação\",\n    \"Análise e Desenvolvimento de Sistemas\",\n    \"Engenharia de Soft','São Paulo - SP','2025-05-28 10:07:54'),(21,2,'Estágio em Desenvolvimento Back-End','Dar suporte na criação e manutenção de sistemas internos voltados à gestão da oficina.','[\n    \"Desenvolvimento em Node.js e Express\",\n    \"Integração com bancos de dados MySQL\",\n    \"Documentação de APIs\",\n    \"Correção de bugs e otimizações\"\n]','[\n    \"Conhecimento em lógica de programação\",\n    \"Noções de banco de dados relacional\",\n    \"Interesse por automação de processos\"\n]','Vale-refeição, vale-transporte',1200.00,'7h/dia','Presencial','[\n    \"Ciência da Computação\",\n    \"Engenharia de Software\"\n]','Guarulhos - SP','2025-05-28 10:07:54'),(22,2,'Estágio em Automação de Processos','Automatizar processos administrativos e operacionais da oficina utilizando ferramentas digitais.','[\n    \"Criação de scripts automatizados com Python\",\n    \"Utilização de ferramentas como Zapier e Power Automate\",\n    \"Geração de relatórios automatizados\",\n    \"Apoio em integração entre sistemas\"\n]','[\n    \"Conhecimento básico em Python\",\n    \"Lógica de programação\",\n    \"Noções de automação ou RPA são diferenciais\"\n]','Vale-transporte, seguro de vida',1150.00,'30h semanais','Híbrido','[\n    \"Engenharia de Computação\",\n    \"Sistemas de Informação\"\n]','Guarulhos - SP','2025-05-28 10:07:54'),(23,2,'Estágio em Banco de Dados','Apoiar na organização e análise de dados operacionais da oficina para geração de insights.','[\n    \"Criação e otimização de queries SQL\",\n    \"Modelagem de dados\",\n    \"Apoio na administração de banco de dados\",\n    \"Geração de relatórios para área financeira\"\n]','[\n    \"Conhecimento em SQL\",\n    \"Familiaridade com MySQL ou PostgreSQL\",\n    \"Desejável noções de modelagem ER\"\n]','Vale-refeição, auxílio transporte',1100.00,'6h/dia','Presencial','[\n    \"Banco de Dados\",\n    \"Análise e Desenvolvimento de Sistemas\"\n]','Guarulhos - SP','2025-05-28 10:07:54'),(24,2,'Estágio em Infraestrutura de TI','Dar suporte à manutenção da rede e equipamentos de TI utilizados na oficina.','[\n    \"Configuração de redes e roteadores\",\n    \"Instalação e manutenção de softwares\",\n    \"Apoio no controle de inventário de equipamentos\",\n    \"Suporte à segurança da informação\"\n]','[\n    \"Noções de redes (TCP/IP, DNS, DHCP)\",\n    \"Conhecimento básico em Windows e Linux\",\n    \"Organização e responsabilidade\"\n]','Vale-refeição, vale-transporte, auxílio estudo',1250.00,'6h/dia','Presencial','[\n    \"Redes de Computadores\",\n    \"Suporte Técnico em Informática\"\n]','Guarulhos - SP','2025-05-28 10:07:54'),(25,2,'Estágio em Análise de Sistemas','Apoiar na análise, documentação e melhoria dos sistemas utilizados nos processos da oficina.','[\n    \"Levantamento de requisitos com os usuários\",\n    \"Mapeamento de processos\",\n    \"Testes funcionais de sistemas\",\n    \"Documentação de manuais técnicos\"\n]','[\n    \"Interesse por análise de sistemas e processos\",\n    \"Boa comunicação escrita\",\n    \"Conhecimento básico em BPMN é um diferencial\"\n]','Vale-transporte, plano de desenvolvimento interno',1200.00,'30h semanais','Híbrido','[\n    \"Sistemas de Informação\",\n    \"Engenharia de Software\"\n]','Guarulhos - SP','2025-05-28 10:07:54'),(26,3,'Estágio em Suporte Técnico em TI','Auxiliar na manutenção de computadores, redes e suporte técnico interno para os setores da gráfica.','[\n    \"Atendimento a chamados técnicos\",\n    \"Manutenção preventiva de estações de trabalho\",\n    \"Configuração de impressoras de rede\",\n    \"Instalação de softwares básicos\"\n]','[\n    \"Conhecimento em manutenção de PCs\",\n    \"Noções de redes e sistemas operacionais\",\n    \"Boa comunicação e organização\"\n]','Vale-transporte, auxílio-alimentação',1000.00,'6h/dia','Presencial','[\n    \"Técnico em Informática\",\n    \"Redes\",\n    \"Cursos correlatos\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(27,3,'Estágio em Marketing Digital e Web','Auxiliar na manutenção do site e ações de marketing digital da gráfica.','[\n    \"Atualização de conteúdos no site institucional\",\n    \"Apoio na criação de campanhas digitais\",\n    \"Análise de métricas do Google Analytics\",\n    \"Suporte ao e-commerce de produtos impressos\"\n]','[\n    \"Noções de HTML/CSS\",\n    \"Conhecimento em ferramentas como WordPress ou Shopify\",\n    \"Interesse por marketing digital e SEO\"\n]','Vale-transporte, bonificação por desempenho',1200.00,'5h/dia','Híbrido','[\n    \"Sistemas para Internet\",\n    \"Marketing Digital\",\n    \"Comunicação\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(28,3,'Estágio em UX/UI Design','Auxiliar na criação e melhoria de interfaces digitais para os sistemas internos e plataformas da gráfica.','[\n    \"Criação de protótipos no Figma\",\n    \"Testes de usabilidade\",\n    \"Colaboração com desenvolvedores para implementação de interfaces\",\n    \"Pesquisa com usuários\"\n]','[\n    \"Noções de design de interfaces (UI) e experiência do usuário (UX)\",\n    \"Conhecimento em ferramentas como Figma ou Adobe XD\",\n    \"Portfólio (mesmo que acadêmico) será um diferencial\"\n]','Vale-transporte, acesso a treinamentos',1300.00,'6h/dia','Presencial','[\n    \"Design Digital\",\n    \"Sistemas para Internet\",\n    \"Publicidade e Propaganda\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(29,3,'Estágio em Integração de Sistemas','Apoiar na integração de sistemas de pedidos online com sistemas internos da gráfica.','[\n    \"Suporte em integrações via API\",\n    \"Desenvolvimento de scripts de automação\",\n    \"Apoio na extração e envio de dados entre plataformas\",\n    \"Análise de logs de integração\"\n]','[\n    \"Conhecimento básico em APIs REST\",\n    \"Noções de JavaScript ou Python\",\n    \"Desejável experiência com ferramentas de integração (ex: Integromat, Zapier)\"\n]','Vale-transporte, auxílio home office',1400.00,'30h semanais','Híbrido','[\n    \"Análise de Sistemas\",\n    \"Engenharia de Software\"\n]','São Paulo - SP','2025-05-28 10:07:54'),(30,3,'Estágio em Ciência de Dados','Acompanhar e analisar os dados operacionais e de vendas da gráfica para fornecer insights estratégicos.','[\n    \"Coleta e limpeza de dados\",\n    \"Análise estatística e criação de relatórios\",\n    \"Apoio em previsões de demanda\",\n    \"Visualização de dados com Power BI\"\n]','[\n    \"Conhecimento básico em Python ou R\",\n    \"Excel avançado\",\n    \"Noções de visualização de dados (Power BI, Google Data Studio)\"\n]','Vale-transporte, plano de desenvolvimento técnico',1300.00,'6h/dia','Híbrido','[\n    \"Ciência de Dados\",\n    \"Engenharia de Produção\",\n    \"Estatística\",\n    \"TI\"\n]','São Paulo - SP','2025-05-28 10:07:54');
/*!40000 ALTER TABLE `vagas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03 19:34:22
