import { NodeData } from './types';

// Função auxiliar para criar a estrutura encadeada (Linked List) dos passos
// Isso garante que o Passo 1 abra o 2, o 2 abra o 3, etc.
const createTrainingChain = (): NodeData[] => {
  return [
    {
      id: "step-1",
      title: "[1] Preparação do Material",
      description: "Criação de PPT e Validação de Vídeos",
      fullDescription: `**Objetivo:** Garantir que o material didático esteja atualizado e funcional.

      **1. Materiais de Apoio (PPT):**
      • Criar o PPT do Treinamento LOCKER – NUBANK (público: atendentes).
      • Criar o PPT do Treinamento TABi – NUBANK (público: supervisores/gestores).
      
      **2. Validação de Vídeos (Obrigatório):**
      Atualmente temos 4 tipos de vídeos. Valide qual será usado:
      • Locker abertura automática - com break
      • Locker abertura automática - sem break
      • Locker abertura manual - com break
      • Locker abertura manual - sem break
      • Treinamento Tabi - Liderança
      
      *Certifique-se que os vídeos estejam disponíveis no Atena/Click.*`,
      link: {
        label: "Clique aqui para acessar os videos dentro do Atena",
        url: "https://atena.exemplo.com/videos-treinamento" // Coloque o link real aqui
      },
      children: [
        {
          id: "step-2",
          title: "[2] Identificação dos Analistas",
          description: "Mapear responsáveis na Nubank",
          fullDescription: `Você precisará falar com dois perfis diferentes na operação para seguir com o fluxo:

          **a) Analista de Pessoas / Treinamento**
          *Responsável por criar a turma no Rekrut.*
          🗣️ Perguntar à operação:
          "Quem é o analista responsável pela criação de turmas de treinamento da Nubank?"

          **b) Analista de Conteúdo**
          *Responsável por publicar o curso no Click.*
          🗣️ Perguntar à operação:
          "Quem é o analista de conteúdo responsável pela operação Nubank?"`,
          children: [
            {
              id: "step-3",
              title: "[3] Geração dos Nominais",
              description: "Criar bases de Atendentes e Líderes",
              fullDescription: `Necessário criar dois arquivos (Excel ou CSV) com as seguintes colunas obrigatórias: **Nome | Matrícula**

              **📂 Arquivo 1: Nominal Atendentes (LOCKER)**
              Filtrar apenas o público operacional que utilizará o Locker.

              **📂 Arquivo 2: Nominal Líderes (TABi)**
              Filtrar Supervisores (Obrigatório) e Coordenadores (Opcional).`,
              children: [
                {
                  id: "step-4",
                  title: "[4] Solicitação de Turmas",
                  description: "Abertura via Rekrut",
                  fullDescription: `Enviar e-mail ou mensagem ao **Analista de Pessoas** (identificado na etapa 2).
                  
                  **Anexar:**
                  • Nominal LOCKER
                  • Nominal TABi
                  
                  **Mensagem:**
                  "Favor criar as turmas abaixo no Rekrut:
                  1. Treinamento LOCKER – NUBANK
                  2. Treinamento TABi – NUBANK"`,
                  children: [
                    {
                      id: "step-5",
                      title: "[5] Abertura de Chamado",
                      description: "Gestão x RH > Plataforma Click",
                      fullDescription: `Abrir um chamado oficial para cada curso.

                      **Caminho do Chamado:**
                      Gestão x RH → Treinamento → Plataforma Click → Curso (Operacional e Administrativo) → Solicitação de Novo Curso.
                      
                      **Campos/Anexos Obrigatórios:**
                      • PPT do treinamento
                      • Vídeo (opcional, se houver)
                      • Descrição do curso (Objetivo)
                      • Nome da turma criada (que o Analista de Pessoas te passou)
                      • Público-alvo detalhado`,
                      children: [
                        {
                          id: "step-6",
                          title: "[6] Acionar Analista Conteúdo",
                          description: "Solicitar prioridade",
                          fullDescription: `Após abrir o chamado, envie o número para o **Analista de Conteúdo** (identificado na etapa 2).

                          **Modelo de Mensagem:**
                          "Olá! Segue chamado [NÚMERO] para publicação do curso LOCKER/TABi da NUBANK.
                          Trata-se de demanda da Governança Locker com prazo curto.
                          Solicito prioridade na publicação. Materiais estão anexados no chamado."`,
                          children: [
                            {
                              id: "step-7",
                              title: "[7] Validação da Publicação",
                              description: "Testar no Click",
                              fullDescription: `Assim que o Analista confirmar a publicação, faça a validação técnica:

                              1. **Acesso:** O curso aparece na busca do Click?
                              2. **Conteúdo:** Os slides/vídeos abrem e rodam até o final?
                              3. **Vínculo:** As turmas (nominais) estão vinculadas corretamente ao curso?`,
                              children: [
                                {
                                  id: "step-8",
                                  title: "[8] Comunicação Operação",
                                  description: "Divulgação Oficial",
                                  fullDescription: `Com o curso validado, comunique a operação NUBANK:

                                  • **Prazo:** Definir data limite para conclusão.
                                  • **Público:** Reforçar quem é obrigado a fazer.
                                  • **Suporte:** Avisar que a EFPA está disponível para dúvidas de acesso.
                                  • **Dica:** Sugerir que o planejamento apoie com pausas programadas para realização.`,
                                  children: [
                                    {
                                      id: "step-9",
                                      title: "[9] Monitoramento",
                                      description: "Acompanhamento Semanal",
                                      fullDescription: `Fase contínua pós-lançamento:

                                      • Extrair relatórios de adesão no Click.
                                      • Monitorar progresso LOCKER e TABi separadamente.
                                      • Consolidar % Concluído vs % Pendente.
                                      • Reportar semanalmente no fluxo oficial da NUBANK e EFPA.`,
                                      children: [] // Fim do fluxo
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
};

export const governanceData: NodeData = {
  id: "root",
  title: "Plano de Capacitação",
  description: "Jornada Locker & TABI",
  fullDescription: `**Processo de aculturamento e capacitação técnica da operação.**
  
  O objetivo é garantir a eficiência fora da PA através de trilhas especializadas:
  
  • **Treinamento Locker:** Foca em 100% dos Atendentes, orientando sobre a interface e a disciplina da jornada.
  • **Treinamento TABI:** Direcionado à liderança (Supervisores obrigatório), focando na gestão nominal de HE para evitar "furos" de governança.
  
  *A estratégia é multi-canal: Treinamentos formais (Click), Comunicados (Robbyson) e Reforço Visual (Wallpapers).*`,
  children: [
    {
      id: "train-branch",
      title: "Treinamento Locker e TABI",
      description: "Fluxo de 9 Etapas de Implementação",
      fullDescription: "Clique no botão '+' ao lado para iniciar a jornada de implementação passo a passo, desde a preparação do material até o monitoramento.",
      // AQUI INSERIMOS A CADEIA SEQUENCIAL DE PASSOS
      children: createTrainingChain()
    },
    {
      id: "robbyson",
      title: "Comunicados Robbyson",
      description: "Engajamento e Gamificação",
      fullDescription: "Estratégia de comunicação visual para aumentar o engajamento na primeira semana. A gamificação aumenta a adesão em até 30%."
    },
    {
      id: "wallpaper",
      title: "Ajuste Wallpaper",
      description: "Reforço Visual nas Máquinas",
      fullDescription: "O Wallpaper deve conter instrução de Reboot e regras de bloqueio visualmente claras para fixação do conhecimento."
    }
  ]
};