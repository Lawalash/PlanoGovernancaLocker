import { NodeData } from './types';

export const governanceData: NodeData = {
  id: "root",
  title: "Plano de Capacitação",
  description: "Jornada Locker & TABI",
  fullDescription: `Processo de aculturamento e capacitação técnica da operação através de trilhas especializadas.
  
  • O **Treinamento Locker** foca em 100% dos Atendentes, orientando sobre a interface e a disciplina da jornada.
  • O **Treinamento TABI** é direcionado à liderança (Supervisores obrigatório e Coordenadores opcional), focando na gestão nominal de HE para evitar "furos" de governança.
  
  A estratégia é reforçada por um plano multi-canal: comunicados via Robbyson para engajamento e atualização de Wallpapers nas estações de trabalho para fixação visual das regras de bloqueio.`,
  children: [
    {
      id: "1",
      title: "Treinamento Locker e TABI",
      description: "Capacitação técnica para operação. Clique para detalhes.",
      fullDescription: "Visão geral das 9 etapas críticas para implementação do treinamento técnico.",
      children: [
        {
          id: "step-1",
          title: "[1] Preparação do Material",
          description: "Criação de PPT e Validação de Vídeos",
          fullDescription: `**Ações Necessárias:**
          1. Criar o PPT do Treinamento LOCKER – NUBANK (público: atendentes).
          2. Criar o PPT do Treinamento TABi – NUBANK (público: supervisores/gestores).
          3. Garantir que os vídeos (LOCKER e TABi) estejam disponíveis.
          
          **Tipos de Vídeos Atuais para Validação:**
          • Locker abertura automática - com break
          • Locker abertura automática - sem break
          • Locker abertura manual - com break
          • Locker abertura manual - sem break
          • Treinamento Tabi - Liderança`,
          link: {
            label: "Acessar vídeos no Atena",
            url: "https://atena.example.com" // Substitua pelo link real
          }
        },
        {
          id: "step-2",
          title: "[2] Identificação dos Analistas",
          description: "Mapeamento de Pessoas e Conteúdo",
          fullDescription: `Você precisará falar com dois perfis diferentes na operação:

          **a) Analista de Pessoas / Treinamento** (responsável por criar a turma no Rekrut)
          Perguntar: "Quem é o analista responsável pela criação de turmas de treinamento da Nubank?"

          **b) Analista de Conteúdo** (responsável por publicar o curso no Click)
          Perguntar: "Quem é o analista de conteúdo responsável pela operação Nubank?"`
        },
        {
          id: "step-3",
          title: "[3] Geração dos Nominais",
          description: "Criação de arquivos de base",
          fullDescription: `Criar dois arquivos Excel/CSV distintos:

          **✔ Nominal 1 — Atendentes NUBANK (para LOCKER)**
          Campos necessários: Nome | Matrícula

          **✔ Nominal 2 — Líderes NUBANK (para TABi)**
          Campos necessários: Nome | Matrícula (Supervisores/Gestores)`
        },
        {
          id: "step-4",
          title: "[4] Solicitação de Turmas",
          description: "Envio via Rekrut",
          fullDescription: `Enviar ao Analista de Pessoas identificado na etapa 2:
          
          • O arquivo Nominal LOCKER
          • O arquivo Nominal TABi
          
          **Solicitação:**
          Criar a turma "Treinamento LOCKER – NUBANK" e a turma "Treinamento TABi – NUBANK".`
        },
        {
          id: "step-5",
          title: "[5] Abertura de Chamado",
          description: "Gestão x RH",
          fullDescription: `Abrir um chamado para cada curso seguindo o caminho:
          Gestão x RH → Treinamento → Plataforma Click → Curso (Operacional e Administrativo) → Solicitação de Novo Curso.
          
          **Anexos Obrigatórios:**
          • PPT
          • Vídeo (opcional)
          • Descrição do curso
          • Nome da turma criada (recebido na etapa anterior)
          • Público-alvo`
        },
        {
          id: "step-6",
          title: "[6] Acionar Analista Conteúdo",
          description: "Prioridade na publicação",
          fullDescription: `Enviar mensagem direta:
          "Segue chamado para publicação do curso LOCKER/TABi da NUBANK. Trata-se de demanda da Governança Locker. Solicito prioridade na publicação. Materiais estão anexados no chamado."`
        },
        {
          id: "step-7",
          title: "[7] Validação da Publicação",
          description: "Checklist pós-publicação",
          fullDescription: `Após confirmação do Analista:
          1. Confirmar que o curso aparece no Click.
          2. Verificar se o conteúdo abre e roda corretamente.
          3. Garantir que as turmas estão vinculadas aos cursos corretos.`
        },
        {
          id: "step-8",
          title: "[8] Comunicação Operação",
          description: "Disparo de comunicado",
          fullDescription: `Informar a operação NUBANK:
          • Prazo de conclusão.
          • Público obrigatório.
          • Suporte da EFPA para dúvidas.
          • Sugestão para planejamento apoiar com pausas para realização.`
        },
        {
          id: "step-9",
          title: "[9] Monitoramento",
          description: "Acompanhamento de Aderência",
          fullDescription: `Rotina pós-publicação:
          • Monitorar progresso LOCKER e TABi.
          • Consolidar % concluído vs pendente.
          • Reportar semanalmente no fluxo oficial da NUBANK e EFPA.`
        }
      ]
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
      fullDescription: "O Wallpaper deve conter instrução de Reboot e regras de bloqueio visualmente claras."
    }
  ]
};