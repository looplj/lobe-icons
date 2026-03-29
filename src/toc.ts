export interface IconToc {
  color: string;
  colorGradient?: string;
  desc: string;
  docsUrl: string;
  fullTitle: string;
  group: 'model' | 'provider' | 'application';
  id: string;
    param: {
    hasAvatar: boolean;
    hasBrand: boolean;
    hasBrandColor: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
    hasTextCn: boolean;
    hasTextColor: boolean;
  };
  title: string;
}

const toc: IconToc[] = [
  {
    "color": "#000",
    "desc": "ace",
    "docsUrl": "ace",
    "fullTitle": "ace",
    "group": "model",
    "id": "Ace",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ace"
  },
  {
    "color": "#EB1000",
    "desc": "Adobe",
    "docsUrl": "adobe",
    "fullTitle": "Adobe",
    "group": "model",
    "id": "Adobe",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Adobe"
  },
  {
    "color": "#EB1000",
    "desc": "AdobeFirefly",
    "docsUrl": "adobe-firefly",
    "fullTitle": "AdobeFirefly",
    "group": "model",
    "id": "AdobeFirefly",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AdobeFirefly"
  },
  {
    "color": "#0f6fff",
    "desc": "AgentVoice",
    "docsUrl": "agent-voice",
    "fullTitle": "AgentVoice",
    "group": "model",
    "id": "AgentVoice",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AgentVoice"
  },
  {
    "color": "#fff",
    "desc": "AG-UI",
    "docsUrl": "agui",
    "fullTitle": "AG-UI",
    "group": "model",
    "id": "Agui",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AG-UI"
  },
  {
    "color": "#f0529c",
    "desc": "Ai2",
    "docsUrl": "ai2",
    "fullTitle": "Ai2",
    "group": "model",
    "id": "Ai2",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Ai2"
  },
  {
    "color": "#E91E63",
    "colorGradient": "linear-gradient(-45deg, #F68CB2,  #E91E63)",
    "desc": "AI21",
    "docsUrl": "ai21",
    "fullTitle": "AI21",
    "group": "model",
    "id": "Ai21",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AI21"
  },
  {
    "color": "#8E47FF",
    "desc": "302.AI",
    "docsUrl": "ai302",
    "fullTitle": "302.AI",
    "group": "model",
    "id": "Ai302",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "302.AI"
  },
  {
    "color": "#006ffb",
    "colorGradient": "linear-gradient(to bottom, #12B7FA,  #006ffb)",
    "desc": "AI360",
    "docsUrl": "ai360",
    "fullTitle": "AI360",
    "group": "model",
    "id": "Ai360",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AI360"
  },
  {
    "color": "#006FFB",
    "desc": "AiHubMix",
    "docsUrl": "ai-hub-mix",
    "fullTitle": "AiHubMix",
    "group": "model",
    "id": "AiHubMix",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AiHubMix"
  },
  {
    "color": "#fff",
    "desc": "AiMass",
    "docsUrl": "ai-mass",
    "fullTitle": "AiMass",
    "group": "model",
    "id": "AiMass",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AiMass"
  },
  {
    "color": "#000",
    "desc": "Google AI Studio",
    "docsUrl": "ai-studio",
    "fullTitle": "Google AI Studio",
    "group": "model",
    "id": "AiStudio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Google AI Studio"
  },
  {
    "color": "#0f172a",
    "desc": "AionLabs",
    "docsUrl": "aion-labs",
    "fullTitle": "AionLabs",
    "group": "model",
    "id": "AionLabs",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AionLabs"
  },
  {
    "color": "#000",
    "desc": "AkashChat",
    "docsUrl": "akash-chat",
    "fullTitle": "AkashChat",
    "group": "model",
    "id": "AkashChat",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AkashChat"
  },
  {
    "color": "#fff",
    "desc": "AlephAlpha",
    "docsUrl": "aleph-alpha",
    "fullTitle": "AlephAlpha",
    "group": "model",
    "id": "AlephAlpha",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AlephAlpha"
  },
  {
    "color": "#FF6003",
    "desc": "Alibaba",
    "docsUrl": "alibaba",
    "fullTitle": "Alibaba",
    "group": "model",
    "id": "Alibaba",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "Alibaba"
  },
  {
    "color": "#FF6A00",
    "desc": "AlibabaCloud",
    "docsUrl": "alibaba-cloud",
    "fullTitle": "AlibabaCloud",
    "group": "model",
    "id": "AlibabaCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "AlibabaCloud"
  },
  {
    "color": "#F34E3F",
    "desc": "Amp",
    "docsUrl": "amp",
    "fullTitle": "Amp",
    "group": "model",
    "id": "Amp",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Amp"
  },
  {
    "color": "#1677ff",
    "desc": "AntGroup",
    "docsUrl": "ant-group",
    "fullTitle": "AntGroup",
    "group": "model",
    "id": "AntGroup",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "AntGroup"
  },
  {
    "color": "#F1F0E8",
    "desc": "Anthropic",
    "docsUrl": "anthropic",
    "fullTitle": "Anthropic",
    "group": "model",
    "id": "Anthropic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Anthropic"
  },
  {
    "color": "#fff",
    "desc": "Antigravity",
    "docsUrl": "antigravity",
    "fullTitle": "Antigravity",
    "group": "model",
    "id": "Antigravity",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Antigravity"
  },
  {
    "color": "#0163FB",
    "desc": "Anyscale",
    "docsUrl": "anyscale",
    "fullTitle": "Anyscale",
    "group": "model",
    "id": "Anyscale",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Anyscale"
  },
  {
    "color": "#0d9488",
    "desc": "Apertis",
    "docsUrl": "apertis",
    "fullTitle": "Apertis",
    "group": "model",
    "id": "Apertis",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Apertis"
  },
  {
    "color": "#fff",
    "desc": "Apple",
    "docsUrl": "apple",
    "fullTitle": "Apple",
    "group": "model",
    "id": "Apple",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Apple"
  },
  {
    "color": "#008C8C",
    "desc": "Arcee",
    "docsUrl": "arcee",
    "fullTitle": "Arcee",
    "group": "model",
    "id": "Arcee",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Arcee"
  },
  {
    "color": "#E8A317",
    "desc": "AskVerdict",
    "docsUrl": "ask-verdict",
    "fullTitle": "AskVerdict",
    "group": "model",
    "id": "AskVerdict",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AskVerdict"
  },
  {
    "color": "#2545D3",
    "desc": "AssemblyAI",
    "docsUrl": "assembly-ai",
    "fullTitle": "AssemblyAI",
    "group": "model",
    "id": "AssemblyAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AssemblyAI"
  },
  {
    "color": "#7036F0",
    "desc": "Atlas Cloud",
    "docsUrl": "atlas-cloud",
    "fullTitle": "Atlas Cloud",
    "group": "model",
    "id": "AtlasCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Atlas Cloud"
  },
  {
    "color": "#E00054",
    "desc": "Automatic",
    "docsUrl": "automatic",
    "fullTitle": "Automatic",
    "group": "model",
    "id": "Automatic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Automatic"
  },
  {
    "color": "#222F3E",
    "desc": "AWS",
    "docsUrl": "aws",
    "fullTitle": "AWS",
    "group": "model",
    "id": "Aws",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AWS"
  },
  {
    "color": "#416FDC",
    "desc": "Aya",
    "docsUrl": "aya",
    "fullTitle": "Aya",
    "group": "model",
    "id": "Aya",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Aya"
  },
  {
    "color": "#fff",
    "desc": "Azure",
    "docsUrl": "azure",
    "fullTitle": "Azure",
    "group": "model",
    "id": "Azure",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Azure"
  },
  {
    "color": "#000",
    "desc": "AzureAI",
    "docsUrl": "azure-ai",
    "fullTitle": "AzureAI",
    "group": "model",
    "id": "AzureAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "AzureAI"
  },
  {
    "color": "#000",
    "desc": "BAAI",
    "docsUrl": "baai",
    "fullTitle": "BAAI",
    "group": "model",
    "id": "BAAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "BAAI"
  },
  {
    "color": "#FF6933",
    "colorGradient": "linear-gradient(-45deg, #FF6933, #FEC13E)",
    "desc": "Baichuan",
    "docsUrl": "baichuan",
    "fullTitle": "Baichuan",
    "group": "model",
    "id": "Baichuan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Baichuan"
  },
  {
    "color": "#2932E1",
    "desc": "Baidu",
    "docsUrl": "baidu",
    "fullTitle": "Baidu",
    "group": "model",
    "id": "Baidu",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "Baidu"
  },
  {
    "color": "#2468f2",
    "desc": "BaiduCloud",
    "docsUrl": "baidu-cloud",
    "fullTitle": "BaiduCloud",
    "group": "model",
    "id": "BaiduCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "BaiduCloud"
  },
  {
    "color": "#615ced",
    "desc": "BaiLian",
    "docsUrl": "bailian",
    "fullTitle": "BaiLian",
    "group": "model",
    "id": "Bailian",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "BaiLian"
  },
  {
    "color": "#19E76E",
    "desc": "Baseten",
    "docsUrl": "baseten",
    "fullTitle": "Baseten",
    "group": "model",
    "id": "Baseten",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Baseten"
  },
  {
    "color": "#222F3E",
    "colorGradient": "linear-gradient(45deg, #9AD8F8, #3D8FFF, #6350FB)",
    "desc": "Bedrock",
    "docsUrl": "bedrock",
    "fullTitle": "Bedrock",
    "group": "model",
    "id": "Bedrock",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Bedrock"
  },
  {
    "color": "#fff",
    "desc": "Black Forest Labs",
    "docsUrl": "bfl",
    "fullTitle": "Black Forest Labs",
    "group": "model",
    "id": "Bfl",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Black Forest Labs"
  },
  {
    "color": "#FB7299",
    "desc": "bilibili",
    "docsUrl": "bilibili",
    "fullTitle": "bilibili",
    "group": "model",
    "id": "Bilibili",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "bilibili"
  },
  {
    "color": "#5E19B7",
    "desc": "bilibili index",
    "docsUrl": "bilibili-index",
    "fullTitle": "bilibili index",
    "group": "model",
    "id": "BilibiliIndex",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "bilibili index"
  },
  {
    "color": "#174ae4",
    "colorGradient": "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)",
    "desc": "Bing",
    "docsUrl": "bing",
    "fullTitle": "Bing",
    "group": "model",
    "id": "Bing",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Bing"
  },
  {
    "color": "#671ECC",
    "desc": "BRIA AI",
    "docsUrl": "bria-ai",
    "fullTitle": "BRIA AI",
    "group": "model",
    "id": "BriaAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "BRIA AI"
  },
  {
    "color": "#E95513",
    "desc": "BurnCloud",
    "docsUrl": "burn-cloud",
    "fullTitle": "BurnCloud",
    "group": "model",
    "id": "BurnCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "BurnCloud"
  },
  {
    "color": "#325AB4",
    "desc": "ByteDance",
    "docsUrl": "byte-dance",
    "fullTitle": "ByteDance",
    "group": "model",
    "id": "ByteDance",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "ByteDance"
  },
  {
    "color": "#fff",
    "desc": "CapCut",
    "docsUrl": "cap-cut",
    "fullTitle": "CapCut",
    "group": "model",
    "id": "CapCut",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CapCut"
  },
  {
    "color": "#004331",
    "desc": "CentML",
    "docsUrl": "cent-ml",
    "fullTitle": "CentML",
    "group": "model",
    "id": "CentML",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CentML"
  },
  {
    "color": "#F15A29",
    "desc": "Cerebras",
    "docsUrl": "cerebras",
    "fullTitle": "Cerebras",
    "group": "model",
    "id": "Cerebras",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Cerebras"
  },
  {
    "color": "#4268FA",
    "colorGradient": "linear-gradient(-45deg, #3485FF,  #504AF4)",
    "desc": "ChatGLM",
    "docsUrl": "chat-glm",
    "fullTitle": "ChatGLM",
    "group": "model",
    "id": "ChatGLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ChatGLM"
  },
  {
    "color": "#EA5E5D",
    "desc": "CherryStudio",
    "docsUrl": "cherry-studio",
    "fullTitle": "CherryStudio",
    "group": "model",
    "id": "CherryStudio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CherryStudio"
  },
  {
    "color": "#fff",
    "desc": "Civitai",
    "docsUrl": "civitai",
    "fullTitle": "Civitai",
    "group": "model",
    "id": "Civitai",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Civitai"
  },
  {
    "color": "#D97757",
    "desc": "Claude",
    "docsUrl": "claude",
    "fullTitle": "Claude",
    "group": "model",
    "id": "Claude",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Claude"
  },
  {
    "color": "#D97757",
    "desc": "Antigravity",
    "docsUrl": "claude-code",
    "fullTitle": "Antigravity",
    "group": "model",
    "id": "ClaudeCode",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Antigravity"
  },
  {
    "color": "#323B43",
    "desc": "Cline",
    "docsUrl": "cline",
    "fullTitle": "Cline",
    "group": "model",
    "id": "Cline",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Cline"
  },
  {
    "color": "#000",
    "desc": "Clipdrop",
    "docsUrl": "clipdrop",
    "fullTitle": "Clipdrop",
    "group": "model",
    "id": "Clipdrop",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Clipdrop"
  },
  {
    "color": "#F38020",
    "desc": "Cloudflare",
    "docsUrl": "cloudflare",
    "fullTitle": "Cloudflare",
    "group": "model",
    "id": "Cloudflare",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Cloudflare"
  },
  {
    "color": "#32EDDA",
    "desc": "CodeFlicker",
    "docsUrl": "code-flicker",
    "fullTitle": "CodeFlicker",
    "group": "model",
    "id": "CodeFlicker",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CodeFlicker"
  },
  {
    "color": "#00e7e7",
    "colorGradient": "linear-gradient(to right, #00E7E7,  #00BFFF)",
    "desc": "CodeGeeX",
    "docsUrl": "code-gee-x",
    "fullTitle": "CodeGeeX",
    "group": "model",
    "id": "CodeGeeX",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CodeGeeX"
  },
  {
    "color": "#fff",
    "desc": "Codex",
    "docsUrl": "codex",
    "fullTitle": "Codex",
    "group": "model",
    "id": "Codex",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Codex"
  },
  {
    "color": "#000",
    "desc": "CogVideo",
    "docsUrl": "cog-video",
    "fullTitle": "CogVideo",
    "group": "model",
    "id": "CogVideo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CogVideo"
  },
  {
    "color": "#000",
    "desc": "CogView",
    "docsUrl": "cog-view",
    "fullTitle": "CogView",
    "group": "model",
    "id": "CogView",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CogView"
  },
  {
    "color": "#39594D",
    "desc": "Cohere",
    "docsUrl": "cohere",
    "fullTitle": "Cohere",
    "group": "model",
    "id": "Cohere",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Cohere"
  },
  {
    "color": "#F9AB00",
    "desc": "Colab",
    "docsUrl": "colab",
    "fullTitle": "Colab",
    "group": "model",
    "id": "Colab",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Colab"
  },
  {
    "color": "#00ACE2",
    "desc": "CometAPI",
    "docsUrl": "comet-api",
    "fullTitle": "CometAPI",
    "group": "model",
    "id": "CometAPI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CometAPI"
  },
  {
    "color": "#F0FF41",
    "desc": "ComfyUI",
    "docsUrl": "comfy-ui",
    "fullTitle": "ComfyUI",
    "group": "model",
    "id": "ComfyUI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ComfyUI"
  },
  {
    "color": "#39594D",
    "desc": "CommandA",
    "docsUrl": "command-a",
    "fullTitle": "CommandA",
    "group": "model",
    "id": "CommandA",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CommandA"
  },
  {
    "color": "#fff",
    "desc": "Copilot",
    "docsUrl": "copilot",
    "fullTitle": "Copilot",
    "group": "model",
    "id": "Copilot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Copilot"
  },
  {
    "color": "#fff",
    "desc": "CopilotKit",
    "docsUrl": "copilot-kit",
    "fullTitle": "CopilotKit",
    "group": "model",
    "id": "CopilotKit",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CopilotKit"
  },
  {
    "color": "#03363D",
    "desc": "Coqui",
    "docsUrl": "coqui",
    "fullTitle": "Coqui",
    "group": "model",
    "id": "Coqui",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Coqui"
  },
  {
    "color": "#4D53E8",
    "desc": "Coze",
    "docsUrl": "coze",
    "fullTitle": "Coze",
    "group": "model",
    "id": "Coze",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Coze"
  },
  {
    "color": "#fff",
    "desc": "CrewAI",
    "docsUrl": "crew-ai",
    "fullTitle": "CrewAI",
    "group": "model",
    "id": "CrewAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CrewAI"
  },
  {
    "color": "#fff",
    "desc": "Crusoe",
    "docsUrl": "crusoe",
    "fullTitle": "Crusoe",
    "group": "model",
    "id": "Crusoe",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Crusoe"
  },
  {
    "color": "#000",
    "desc": "Cursor",
    "docsUrl": "cursor",
    "fullTitle": "Cursor",
    "group": "model",
    "id": "Cursor",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Cursor"
  },
  {
    "color": "#000",
    "desc": "CyberCut",
    "docsUrl": "cyber-cut",
    "fullTitle": "CyberCut",
    "group": "model",
    "id": "CyberCut",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "CyberCut"
  },
  {
    "color": "#000",
    "colorGradient": "conic-gradient(from 180deg, #FFFF67, #43FFFF, #50DA4C, #FF6E3D, #3C46FF)",
    "desc": "DALL-E",
    "docsUrl": "dalle",
    "fullTitle": "DALL-E",
    "group": "model",
    "id": "Dalle",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DALL-E"
  },
  {
    "color": "#EE3D2C",
    "desc": "DBRX",
    "docsUrl": "dbrx",
    "fullTitle": "DBRX",
    "group": "model",
    "id": "Dbrx",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DBRX"
  },
  {
    "color": "#fff",
    "desc": "DeepAI",
    "docsUrl": "deep-ai",
    "fullTitle": "DeepAI",
    "group": "model",
    "id": "DeepAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DeepAI"
  },
  {
    "color": "#4e81ee",
    "desc": "Deep Cogito",
    "docsUrl": "deep-cogito",
    "fullTitle": "Deep Cogito",
    "group": "model",
    "id": "DeepCogito",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Deep Cogito"
  },
  {
    "color": "#fff",
    "desc": "DeepInfra",
    "docsUrl": "deep-infra",
    "fullTitle": "DeepInfra",
    "group": "model",
    "id": "DeepInfra",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DeepInfra"
  },
  {
    "color": "#0F2B46",
    "desc": "DeepL",
    "docsUrl": "deep-l",
    "fullTitle": "DeepL",
    "group": "model",
    "id": "DeepL",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DeepL"
  },
  {
    "color": "#4285F4",
    "desc": "DeepMind",
    "docsUrl": "deep-mind",
    "fullTitle": "DeepMind",
    "group": "model",
    "id": "DeepMind",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DeepMind"
  },
  {
    "color": "#4D6BFE",
    "desc": "DeepSeek",
    "docsUrl": "deep-seek",
    "fullTitle": "DeepSeek",
    "group": "model",
    "id": "DeepSeek",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DeepSeek"
  },
  {
    "color": "#03F",
    "desc": "Dify",
    "docsUrl": "dify",
    "fullTitle": "Dify",
    "group": "model",
    "id": "Dify",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Dify"
  },
  {
    "color": "#fff",
    "desc": "Doc2X",
    "docsUrl": "doc2-x",
    "fullTitle": "Doc2X",
    "group": "model",
    "id": "Doc2X",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Doc2X"
  },
  {
    "color": "#fff",
    "desc": "DocSearch",
    "docsUrl": "doc-search",
    "fullTitle": "DocSearch",
    "group": "model",
    "id": "DocSearch",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DocSearch"
  },
  {
    "color": "#6186db",
    "desc": "Dolphin",
    "docsUrl": "dolphin",
    "fullTitle": "Dolphin",
    "group": "model",
    "id": "Dolphin",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Dolphin"
  },
  {
    "color": "#FFF",
    "desc": "Doubao",
    "docsUrl": "doubao",
    "fullTitle": "Doubao",
    "group": "model",
    "id": "Doubao",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Doubao"
  },
  {
    "color": "#000",
    "desc": "DreamMachine",
    "docsUrl": "dream-machine",
    "fullTitle": "DreamMachine",
    "group": "model",
    "id": "DreamMachine",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "DreamMachine"
  },
  {
    "color": "#fff",
    "desc": "ElevenLabs",
    "docsUrl": "eleven-labs",
    "fullTitle": "ElevenLabs",
    "group": "model",
    "id": "ElevenLabs",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ElevenLabs"
  },
  {
    "color": "#fff",
    "desc": "11x",
    "docsUrl": "eleven-x",
    "fullTitle": "11x",
    "group": "model",
    "id": "ElevenX",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "11x"
  },
  {
    "color": "#111322",
    "colorGradient": "linear-gradient(135deg, #5E38A5, #31018C 63%)",
    "desc": "Essential AI",
    "docsUrl": "essential-ai",
    "fullTitle": "Essential AI",
    "group": "model",
    "id": "EssentialAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Essential AI"
  },
  {
    "color": "#1f40ed",
    "desc": "Exa",
    "docsUrl": "exa",
    "fullTitle": "Exa",
    "group": "model",
    "id": "Exa",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Exa"
  },
  {
    "color": "#EC0648",
    "desc": "Fal",
    "docsUrl": "fal",
    "fullTitle": "Fal",
    "group": "model",
    "id": "Fal",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Fal"
  },
  {
    "color": "#fff",
    "desc": "FastGPT",
    "docsUrl": "fast-gpt",
    "fullTitle": "FastGPT",
    "group": "model",
    "id": "FastGPT",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "FastGPT"
  },
  {
    "color": "#FFE184",
    "desc": "featherless.ai",
    "docsUrl": "featherless",
    "fullTitle": "featherless.ai",
    "group": "model",
    "id": "Featherless",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "featherless.ai"
  },
  {
    "color": "#000",
    "desc": "Figma",
    "docsUrl": "figma",
    "fullTitle": "Figma",
    "group": "model",
    "id": "Figma",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Figma"
  },
  {
    "color": "#5019C5",
    "desc": "Fireworks",
    "docsUrl": "fireworks",
    "fullTitle": "Fireworks",
    "group": "model",
    "id": "Fireworks",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Fireworks"
  },
  {
    "color": "#fff",
    "desc": "FishAudio",
    "docsUrl": "fish-audio",
    "fullTitle": "FishAudio",
    "group": "model",
    "id": "FishAudio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "FishAudio"
  },
  {
    "color": "#000",
    "desc": "Flora",
    "docsUrl": "flora",
    "fullTitle": "Flora",
    "group": "model",
    "id": "Flora",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Flora"
  },
  {
    "color": "#fff",
    "desc": "Flowith",
    "docsUrl": "flowith",
    "fullTitle": "Flowith",
    "group": "model",
    "id": "Flowith",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Flowith"
  },
  {
    "color": "#fff",
    "desc": "Flux",
    "docsUrl": "flux",
    "fullTitle": "Flux",
    "group": "model",
    "id": "Flux",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Flux"
  },
  {
    "color": "#101723",
    "desc": "Friendli",
    "docsUrl": "friendli",
    "fullTitle": "Friendli",
    "group": "model",
    "id": "Friendli",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Friendli"
  },
  {
    "color": "#0039C6",
    "desc": "GLM-V",
    "docsUrl": "glmv",
    "fullTitle": "GLM-V",
    "group": "model",
    "id": "GLMV",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "GLM-V"
  },
  {
    "color": "#fff",
    "desc": "Gemini",
    "docsUrl": "gemini",
    "fullTitle": "Gemini",
    "group": "model",
    "id": "Gemini",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Gemini"
  },
  {
    "color": "#1E1E2E",
    "desc": "Gemini CLI",
    "docsUrl": "gemini-cli",
    "fullTitle": "Gemini CLI",
    "group": "model",
    "id": "GeminiCLI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Gemini CLI"
  },
  {
    "color": "#2E96FF",
    "colorGradient": "linear-gradient(45deg, #446EFF 14%, #2E96FF 40%, #B1C5FF 73%)",
    "desc": "Gemma",
    "docsUrl": "gemma",
    "fullTitle": "Gemma",
    "group": "model",
    "id": "Gemma",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Gemma"
  },
  {
    "color": "#000",
    "desc": "GiteeAI",
    "docsUrl": "gitee-ai",
    "fullTitle": "GiteeAI",
    "group": "model",
    "id": "GiteeAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "GiteeAI"
  },
  {
    "color": "#000",
    "desc": "Github",
    "docsUrl": "github",
    "fullTitle": "Github",
    "group": "model",
    "id": "Github",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Github"
  },
  {
    "color": "#000",
    "desc": "GithubCopilot",
    "docsUrl": "github-copilot",
    "fullTitle": "GithubCopilot",
    "group": "model",
    "id": "GithubCopilot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "GithubCopilot"
  },
  {
    "color": "#000",
    "desc": "Glama",
    "docsUrl": "glama",
    "fullTitle": "Glama",
    "group": "model",
    "id": "Glama",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Glama"
  },
  {
    "color": "#000",
    "desc": "Glif",
    "docsUrl": "glif",
    "fullTitle": "Glif",
    "group": "model",
    "id": "Glif",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Glif"
  },
  {
    "color": "#fff",
    "desc": "Google",
    "docsUrl": "google",
    "fullTitle": "Google",
    "group": "model",
    "id": "Google",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": false,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Google"
  },
  {
    "color": "#fff",
    "desc": "GoogleCloud",
    "docsUrl": "google-cloud",
    "fullTitle": "GoogleCloud",
    "group": "model",
    "id": "GoogleCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": false,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "GoogleCloud"
  },
  {
    "color": "#fff",
    "desc": "Goose",
    "docsUrl": "goose",
    "fullTitle": "Goose",
    "group": "model",
    "id": "Goose",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Goose"
  },
  {
    "color": "#fff",
    "desc": "Gradio",
    "docsUrl": "gradio",
    "fullTitle": "Gradio",
    "group": "model",
    "id": "Gradio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Gradio"
  },
  {
    "color": "#44A775",
    "desc": "Greptile",
    "docsUrl": "greptile",
    "fullTitle": "Greptile",
    "group": "model",
    "id": "Greptile",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Greptile"
  },
  {
    "color": "#000",
    "desc": "Grok",
    "docsUrl": "grok",
    "fullTitle": "Grok",
    "group": "model",
    "id": "Grok",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Grok"
  },
  {
    "color": "#F55036",
    "desc": "Groq",
    "docsUrl": "groq",
    "fullTitle": "Groq",
    "group": "model",
    "id": "Groq",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Groq"
  },
  {
    "color": "#fff",
    "colorGradient": "linear-gradient(135deg, #FFAB0C, #FF5538, #E9405D, #D266DA, #D584EF)",
    "desc": "Hailuo",
    "docsUrl": "hailuo",
    "fullTitle": "Hailuo",
    "group": "model",
    "id": "Hailuo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Hailuo"
  },
  {
    "color": "#9581ff",
    "desc": "Haiper",
    "docsUrl": "haiper",
    "fullTitle": "Haiper",
    "group": "model",
    "id": "Haiper",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Haiper"
  },
  {
    "color": "#000",
    "desc": "Hedra",
    "docsUrl": "hedra",
    "fullTitle": "Hedra",
    "group": "model",
    "id": "Hedra",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Hedra"
  },
  {
    "color": "#3E5CF4",
    "colorGradient": "linear-gradient(to bottom, #0418FF,  #1E8CFE)",
    "desc": "Higress",
    "docsUrl": "higress",
    "fullTitle": "Higress",
    "group": "model",
    "id": "Higress",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Higress"
  },
  {
    "color": "#C7000B",
    "desc": "Huawei",
    "docsUrl": "huawei",
    "fullTitle": "Huawei",
    "group": "model",
    "id": "Huawei",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "Huawei"
  },
  {
    "color": "#C7000B",
    "desc": "HuaweiCloud",
    "docsUrl": "huawei-cloud",
    "fullTitle": "HuaweiCloud",
    "group": "model",
    "id": "HuaweiCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "HuaweiCloud"
  },
  {
    "color": "#fff",
    "desc": "HuggingFace",
    "docsUrl": "hugging-face",
    "fullTitle": "HuggingFace",
    "group": "model",
    "id": "HuggingFace",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "HuggingFace"
  },
  {
    "color": "#0053e0",
    "desc": "Hunyuan",
    "docsUrl": "hunyuan",
    "fullTitle": "Hunyuan",
    "group": "model",
    "id": "Hunyuan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Hunyuan"
  },
  {
    "color": "#594CE9",
    "desc": "Hyperbolic",
    "docsUrl": "hyperbolic",
    "fullTitle": "Hyperbolic",
    "group": "model",
    "id": "Hyperbolic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Hyperbolic"
  },
  {
    "color": "#0F62FE",
    "desc": "IBM",
    "docsUrl": "ibm",
    "fullTitle": "IBM",
    "group": "model",
    "id": "IBM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "IBM"
  },
  {
    "color": "#2A80E2",
    "desc": "iFlyTekCloud",
    "docsUrl": "i-fly-tek-cloud",
    "fullTitle": "iFlyTekCloud",
    "group": "model",
    "id": "IFlyTekCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "iFlyTekCloud"
  },
  {
    "color": "#fff",
    "desc": "Ideogram",
    "docsUrl": "ideogram",
    "fullTitle": "Ideogram",
    "group": "model",
    "id": "Ideogram",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Ideogram"
  },
  {
    "color": "#fff",
    "desc": "Inception",
    "docsUrl": "inception",
    "fullTitle": "Inception",
    "group": "model",
    "id": "Inception",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Inception"
  },
  {
    "color": "#000",
    "desc": "Inference",
    "docsUrl": "inference",
    "fullTitle": "Inference",
    "group": "model",
    "id": "Inference",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Inference"
  },
  {
    "color": "#4334F5",
    "desc": "Infermatic",
    "docsUrl": "infermatic",
    "fullTitle": "Infermatic",
    "group": "model",
    "id": "Infermatic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Infermatic"
  },
  {
    "color": "#7952ea",
    "desc": "Infinigence",
    "docsUrl": "infinigence",
    "fullTitle": "Infinigence",
    "group": "model",
    "id": "Infinigence",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "Infinigence"
  },
  {
    "color": "#038247",
    "desc": "Inflection",
    "docsUrl": "inflection",
    "fullTitle": "Inflection",
    "group": "model",
    "id": "Inflection",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Inflection"
  },
  {
    "color": "#1B3882",
    "desc": "InternLM",
    "docsUrl": "intern-lm",
    "fullTitle": "InternLM",
    "group": "model",
    "id": "InternLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "InternLM"
  },
  {
    "color": "#000",
    "desc": "Jimeng",
    "docsUrl": "jimeng",
    "fullTitle": "Jimeng",
    "group": "model",
    "id": "Jimeng",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Jimeng"
  },
  {
    "color": "#000",
    "desc": "Jina",
    "docsUrl": "jina",
    "fullTitle": "Jina",
    "group": "model",
    "id": "Jina",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Jina"
  },
  {
    "color": "#47E054",
    "desc": "Junie",
    "docsUrl": "junie",
    "fullTitle": "Junie",
    "group": "model",
    "id": "Junie",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Junie"
  },
  {
    "color": "#F8F676",
    "desc": "Kilo Code",
    "docsUrl": "kilo-code",
    "fullTitle": "Kilo Code",
    "group": "model",
    "id": "KiloCode",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Kilo Code"
  },
  {
    "color": "#000",
    "desc": "Kimi",
    "docsUrl": "kimi",
    "fullTitle": "Kimi",
    "group": "model",
    "id": "Kimi",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Kimi"
  },
  {
    "color": "#000",
    "colorGradient": "linear-gradient(45deg, #FFF959, #0DF35E, #0BF2F9, #04A6F0)",
    "desc": "Kling",
    "docsUrl": "kling",
    "fullTitle": "Kling",
    "group": "model",
    "id": "Kling",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Kling"
  },
  {
    "color": "#6525F7",
    "desc": "Kluster",
    "docsUrl": "kluster",
    "fullTitle": "Kluster",
    "group": "model",
    "id": "Kluster",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Kluster"
  },
  {
    "color": "#83FF63",
    "colorGradient": "radial-gradient(#CBFF00,#7EF426)",
    "desc": "Kolors",
    "docsUrl": "kolors",
    "fullTitle": "Kolors",
    "group": "model",
    "id": "Kolors",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Kolors"
  },
  {
    "color": "#000",
    "desc": "Krea",
    "docsUrl": "krea",
    "fullTitle": "Krea",
    "group": "model",
    "id": "Krea",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Krea"
  },
  {
    "color": "#0A67FF",
    "desc": "KwaiKAT",
    "docsUrl": "kwai-kat",
    "fullTitle": "KwaiKAT",
    "group": "model",
    "id": "KwaiKAT",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "KwaiKAT"
  },
  {
    "color": "#000",
    "desc": "Kwaipilot",
    "docsUrl": "kwaipilot",
    "fullTitle": "Kwaipilot",
    "group": "model",
    "id": "Kwaipilot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Kwaipilot"
  },
  {
    "color": "#C00C3F",
    "desc": "LG AI",
    "docsUrl": "lg",
    "fullTitle": "LG AI",
    "group": "model",
    "id": "LG",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LG AI"
  },
  {
    "color": "#CB2D30",
    "colorGradient": "linear-gradient(-45deg, #CB2D30, #ED823A)",
    "desc": "LLaVA",
    "docsUrl": "l-la-va",
    "fullTitle": "LLaVA",
    "group": "model",
    "id": "LLaVA",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LLaVA"
  },
  {
    "color": "#000",
    "desc": "Lambda",
    "docsUrl": "lambda",
    "fullTitle": "Lambda",
    "group": "model",
    "id": "Lambda",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Lambda"
  },
  {
    "color": "#7FC8FF",
    "desc": "LangChain",
    "docsUrl": "lang-chain",
    "fullTitle": "LangChain",
    "group": "model",
    "id": "LangChain",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LangChain"
  },
  {
    "color": "#1C3C3C",
    "desc": "LangGraph",
    "docsUrl": "lang-graph",
    "fullTitle": "LangGraph",
    "group": "model",
    "id": "LangGraph",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LangGraph"
  },
  {
    "color": "#1C3C3C",
    "desc": "LangSmith",
    "docsUrl": "lang-smith",
    "fullTitle": "LangSmith",
    "group": "model",
    "id": "LangSmith",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LangSmith"
  },
  {
    "color": "#000",
    "desc": "Langfuse",
    "docsUrl": "langfuse",
    "fullTitle": "Langfuse",
    "group": "model",
    "id": "Langfuse",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Langfuse"
  },
  {
    "color": "#2F80ED",
    "desc": "LeptonAI",
    "docsUrl": "lepton-ai",
    "fullTitle": "LeptonAI",
    "group": "model",
    "id": "LeptonAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LeptonAI"
  },
  {
    "color": "#000",
    "desc": "Lightricks",
    "docsUrl": "lightricks",
    "fullTitle": "Lightricks",
    "group": "model",
    "id": "Lightricks",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Lightricks"
  },
  {
    "color": "#fff",
    "desc": "Liquid",
    "docsUrl": "liquid",
    "fullTitle": "Liquid",
    "group": "model",
    "id": "Liquid",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Liquid"
  },
  {
    "color": "#000",
    "desc": "LiveKit",
    "docsUrl": "live-kit",
    "fullTitle": "LiveKit",
    "group": "model",
    "id": "LiveKit",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LiveKit"
  },
  {
    "color": "#000",
    "desc": "LlamaIndex",
    "docsUrl": "llama-index",
    "fullTitle": "LlamaIndex",
    "group": "model",
    "id": "LlamaIndex",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LlamaIndex"
  },
  {
    "color": "#3F35FF",
    "desc": "LLM API",
    "docsUrl": "llm-api",
    "fullTitle": "LLM API",
    "group": "model",
    "id": "LlmApi",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LLM API"
  },
  {
    "color": "#4338CA",
    "colorGradient": "linear-gradient(135deg, #6C78EF, #4F14BE)",
    "desc": "LM Studio",
    "docsUrl": "lm-studio",
    "fullTitle": "LM Studio",
    "group": "model",
    "id": "LmStudio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LM Studio"
  },
  {
    "color": "#fff",
    "desc": "LobeHub",
    "docsUrl": "lobe-hub",
    "fullTitle": "LobeHub",
    "group": "model",
    "id": "LobeHub",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LobeHub"
  },
  {
    "color": "#fff",
    "desc": "LongCat",
    "docsUrl": "long-cat",
    "fullTitle": "LongCat",
    "group": "model",
    "id": "LongCat",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "LongCat"
  },
  {
    "color": "#000",
    "desc": "Lovable",
    "docsUrl": "lovable",
    "fullTitle": "Lovable",
    "group": "model",
    "id": "Lovable",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Lovable"
  },
  {
    "color": "#000",
    "desc": "Lovart",
    "docsUrl": "lovart",
    "fullTitle": "Lovart",
    "group": "model",
    "id": "Lovart",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Lovart"
  },
  {
    "color": "#000",
    "desc": "Luma",
    "docsUrl": "luma",
    "fullTitle": "Luma",
    "group": "model",
    "id": "Luma",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Luma"
  },
  {
    "color": "#FFF",
    "desc": "ModelContextProtocol",
    "docsUrl": "mcp",
    "fullTitle": "ModelContextProtocol",
    "group": "model",
    "id": "MCP",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ModelContextProtocol"
  },
  {
    "color": "#fff",
    "desc": "Magic",
    "docsUrl": "magic",
    "fullTitle": "Magic",
    "group": "model",
    "id": "Magic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Magic"
  },
  {
    "color": "#ff009a",
    "desc": "Make",
    "docsUrl": "make",
    "fullTitle": "Make",
    "group": "model",
    "id": "Make",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Make"
  },
  {
    "color": "#fff",
    "desc": "Manus",
    "docsUrl": "manus",
    "fullTitle": "Manus",
    "group": "model",
    "id": "Manus",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Manus"
  },
  {
    "color": "#000",
    "desc": "Mastra",
    "docsUrl": "mastra",
    "fullTitle": "Mastra",
    "group": "model",
    "id": "Mastra",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Mastra"
  },
  {
    "color": "#1C3F6B",
    "desc": "MCP.so",
    "docsUrl": "mcp-so",
    "fullTitle": "MCP.so",
    "group": "model",
    "id": "McpSo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "MCP.so"
  },
  {
    "color": "#FF5C00",
    "desc": "MENLO",
    "docsUrl": "menlo",
    "fullTitle": "MENLO",
    "group": "model",
    "id": "Menlo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "MENLO"
  },
  {
    "color": "#1d65c1",
    "colorGradient": "linear-gradient(45deg, #007FF8, #0668E1, #007FF8)",
    "desc": "Meta",
    "docsUrl": "meta",
    "fullTitle": "Meta",
    "group": "model",
    "id": "Meta",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Meta"
  },
  {
    "color": "#000",
    "desc": "MetaAI",
    "docsUrl": "meta-ai",
    "fullTitle": "MetaAI",
    "group": "model",
    "id": "MetaAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "MetaAI"
  },
  {
    "color": "#000",
    "desc": "MetaGPT",
    "docsUrl": "meta-gpt",
    "fullTitle": "MetaGPT",
    "group": "model",
    "id": "MetaGPT",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "MetaGPT"
  },
  {
    "color": "#00A4EF",
    "desc": "Azure",
    "docsUrl": "microsoft",
    "fullTitle": "Azure",
    "group": "model",
    "id": "Microsoft",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Azure"
  },
  {
    "color": "#fff",
    "desc": "Midjourney",
    "docsUrl": "midjourney",
    "fullTitle": "Midjourney",
    "group": "model",
    "id": "Midjourney",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Midjourney"
  },
  {
    "color": "#F23F5D",
    "colorGradient": "linear-gradient(to right, #E2167E,  #FE603C)",
    "desc": "Minimax",
    "docsUrl": "minimax",
    "fullTitle": "Minimax",
    "group": "model",
    "id": "Minimax",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Minimax"
  },
  {
    "color": "#FA520F",
    "desc": "Mistral",
    "docsUrl": "mistral",
    "fullTitle": "Mistral",
    "group": "model",
    "id": "Mistral",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Mistral"
  },
  {
    "color": "#624AFF",
    "desc": "ModelScope",
    "docsUrl": "model-scope",
    "fullTitle": "ModelScope",
    "group": "model",
    "id": "ModelScope",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ModelScope"
  },
  {
    "color": "#6841ea",
    "colorGradient": "linear-gradient(90deg, #A83FE0, #515FFB, #2BB5DD)",
    "desc": "Monica",
    "docsUrl": "monica",
    "fullTitle": "Monica",
    "group": "model",
    "id": "Monica",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Monica"
  },
  {
    "color": "#16191E",
    "desc": "MoonshotAI",
    "docsUrl": "moonshot",
    "fullTitle": "MoonshotAI",
    "group": "model",
    "id": "Moonshot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "MoonshotAI"
  },
  {
    "color": "#000",
    "desc": "Morph",
    "docsUrl": "morph",
    "fullTitle": "Morph",
    "group": "model",
    "id": "Morph",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Morph"
  },
  {
    "color": "#fff",
    "desc": "MyShell",
    "docsUrl": "my-shell",
    "fullTitle": "MyShell",
    "group": "model",
    "id": "MyShell",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "MyShell"
  },
  {
    "color": "#EA4B71",
    "desc": "n8n",
    "docsUrl": "n-8-n",
    "fullTitle": "n8n",
    "group": "model",
    "id": "N8n",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "n8n"
  },
  {
    "color": "#00D1B2",
    "desc": "NPLCloud",
    "docsUrl": "npl-cloud",
    "fullTitle": "NPLCloud",
    "group": "model",
    "id": "NPLCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "NPLCloud"
  },
  {
    "color": "#FCD53F",
    "desc": "NanoBanana",
    "docsUrl": "nano-banana",
    "fullTitle": "NanoBanana",
    "group": "model",
    "id": "NanoBanana",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "NanoBanana"
  },
  {
    "color": "#DAFF33",
    "desc": "Nebius",
    "docsUrl": "nebius",
    "fullTitle": "Nebius",
    "group": "model",
    "id": "Nebius",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Nebius"
  },
  {
    "color": "#dd2e57",
    "desc": "New API",
    "docsUrl": "new-api",
    "fullTitle": "New API",
    "group": "model",
    "id": "NewAPI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "New API"
  },
  {
    "color": "#fff",
    "desc": "NotebookLM",
    "docsUrl": "notebook-lm",
    "fullTitle": "NotebookLM",
    "group": "model",
    "id": "NotebookLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "NotebookLM"
  },
  {
    "color": "#fff",
    "desc": "Notion",
    "docsUrl": "notion",
    "fullTitle": "Notion",
    "group": "model",
    "id": "Notion",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Notion"
  },
  {
    "color": "#2D6376",
    "desc": "NousResearch",
    "docsUrl": "nous-research",
    "fullTitle": "NousResearch",
    "group": "model",
    "id": "NousResearch",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "NousResearch"
  },
  {
    "color": "#222F3E",
    "colorGradient": "linear-gradient(-45deg, #ff6200, #e433ff 39.9%, #6842ff 96%)",
    "desc": "Nova",
    "docsUrl": "nova",
    "fullTitle": "Nova",
    "group": "model",
    "id": "Nova",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Nova"
  },
  {
    "color": "#E1E4FF",
    "desc": "NovelAI",
    "docsUrl": "novel-ai",
    "fullTitle": "NovelAI",
    "group": "model",
    "id": "NovelAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "NovelAI"
  },
  {
    "color": "#23D57C",
    "desc": "Novita AI",
    "docsUrl": "novita",
    "fullTitle": "Novita AI",
    "group": "model",
    "id": "Novita",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Novita AI"
  },
  {
    "color": "#74B71B",
    "desc": "Nvidia",
    "docsUrl": "nvidia",
    "fullTitle": "Nvidia",
    "group": "model",
    "id": "Nvidia",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Nvidia"
  },
  {
    "color": "#A88BFA",
    "desc": "Obsidian",
    "docsUrl": "obsidian",
    "fullTitle": "Obsidian",
    "group": "model",
    "id": "Obsidian",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Obsidian"
  },
  {
    "color": "#fff",
    "desc": "Ollama",
    "docsUrl": "ollama",
    "fullTitle": "Ollama",
    "group": "model",
    "id": "Ollama",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Ollama"
  },
  {
    "color": "#000",
    "desc": "OpenAI",
    "docsUrl": "open-ai",
    "fullTitle": "OpenAI",
    "group": "model",
    "id": "OpenAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "OpenAI"
  },
  {
    "color": "#4A7FE3",
    "desc": "OpenChat",
    "docsUrl": "open-chat",
    "fullTitle": "OpenChat",
    "group": "model",
    "id": "OpenChat",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "OpenChat"
  },
  {
    "color": "#ff4d4d",
    "desc": "OpenClaw",
    "docsUrl": "open-claw",
    "fullTitle": "OpenClaw",
    "group": "model",
    "id": "OpenClaw",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "OpenClaw"
  },
  {
    "color": "#000",
    "desc": "opencode",
    "docsUrl": "open-code",
    "fullTitle": "opencode",
    "group": "model",
    "id": "OpenCode",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "opencode"
  },
  {
    "color": "#fff",
    "desc": "OpenHands",
    "docsUrl": "open-hands",
    "fullTitle": "OpenHands",
    "group": "model",
    "id": "OpenHands",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "OpenHands"
  },
  {
    "color": "#6566F1",
    "desc": "OpenRouter",
    "docsUrl": "open-router",
    "fullTitle": "OpenRouter",
    "group": "model",
    "id": "OpenRouter",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "OpenRouter"
  },
  {
    "color": "#fff",
    "desc": "OpenWebUI",
    "docsUrl": "open-web-ui",
    "fullTitle": "OpenWebUI",
    "group": "model",
    "id": "OpenWebUI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "OpenWebUI"
  },
  {
    "color": "#2874ff",
    "desc": "PPIO",
    "docsUrl": "ppio",
    "fullTitle": "PPIO",
    "group": "model",
    "id": "PPIO",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "PPIO"
  },
  {
    "color": "#FFF",
    "desc": "PaLM",
    "docsUrl": "pa-lm",
    "fullTitle": "PaLM",
    "group": "model",
    "id": "PaLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "PaLM"
  },
  {
    "color": "#000",
    "desc": "Parasail",
    "docsUrl": "parasail",
    "fullTitle": "Parasail",
    "group": "model",
    "id": "Parasail",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Parasail"
  },
  {
    "color": "#22B8CD",
    "desc": "Perplexity",
    "docsUrl": "perplexity",
    "fullTitle": "Perplexity",
    "group": "model",
    "id": "Perplexity",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Perplexity"
  },
  {
    "color": "#FF4017",
    "desc": "Phidata",
    "docsUrl": "phidata",
    "fullTitle": "Phidata",
    "group": "model",
    "id": "Phidata",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Phidata"
  },
  {
    "color": "#000",
    "desc": "phind",
    "docsUrl": "phind",
    "fullTitle": "phind",
    "group": "model",
    "id": "Phind",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "phind"
  },
  {
    "color": "#FDF7EF",
    "desc": "Pika",
    "docsUrl": "pika",
    "fullTitle": "Pika",
    "group": "model",
    "id": "Pika",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Pika"
  },
  {
    "color": "#9727ef",
    "colorGradient": "linear-gradient(45deg, #3961f1, #9727ef, #ff601a)",
    "desc": "PixVerse",
    "docsUrl": "pix-verse",
    "fullTitle": "PixVerse",
    "group": "model",
    "id": "PixVerse",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "PixVerse"
  },
  {
    "color": "#A8A6FF",
    "desc": "Player2",
    "docsUrl": "player2",
    "fullTitle": "Player2",
    "group": "model",
    "id": "Player2",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Player2"
  },
  {
    "color": "#000",
    "desc": "Poe",
    "docsUrl": "poe",
    "fullTitle": "Poe",
    "group": "model",
    "id": "Poe",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Poe"
  },
  {
    "color": "#000",
    "desc": "Pollinations",
    "docsUrl": "pollinations",
    "fullTitle": "Pollinations",
    "group": "model",
    "id": "Pollinations",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Pollinations"
  },
  {
    "color": "#AC51FF",
    "desc": "PrunaAI",
    "docsUrl": "pruna-ai",
    "fullTitle": "PrunaAI",
    "group": "model",
    "id": "PrunaAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "PrunaAI"
  },
  {
    "color": "#E92063",
    "desc": "PydanticAI",
    "docsUrl": "pydantic-ai",
    "fullTitle": "PydanticAI",
    "group": "model",
    "id": "PydanticAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "PydanticAI"
  },
  {
    "color": "#1041F3",
    "desc": "Qingyan",
    "docsUrl": "qingyan",
    "fullTitle": "Qingyan",
    "group": "model",
    "id": "Qingyan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Qingyan"
  },
  {
    "color": "#06AEEF",
    "desc": "Qiniu",
    "docsUrl": "qiniu",
    "fullTitle": "Qiniu",
    "group": "model",
    "id": "Qiniu",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Qiniu"
  },
  {
    "color": "#fff",
    "desc": "Qoder",
    "docsUrl": "qoder",
    "fullTitle": "Qoder",
    "group": "model",
    "id": "Qoder",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Qoder"
  },
  {
    "color": "#615ced",
    "colorGradient": "linear-gradient(to right, #6336E7,  #6F69F7)",
    "desc": "Qwen",
    "docsUrl": "qwen",
    "fullTitle": "Qwen",
    "group": "model",
    "id": "Qwen",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Qwen"
  },
  {
    "color": "#fff",
    "desc": "RSSHub",
    "docsUrl": "rss-hub",
    "fullTitle": "RSSHub",
    "group": "model",
    "id": "RSSHub",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "RSSHub"
  },
  {
    "color": "#853bce",
    "colorGradient": "linear-gradient(to bottom, #A204B4, #6213B9)",
    "desc": "Railway",
    "docsUrl": "railway",
    "fullTitle": "Railway",
    "group": "model",
    "id": "Railway",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Railway"
  },
  {
    "color": "#000",
    "desc": "Recraft",
    "docsUrl": "recraft",
    "fullTitle": "Recraft",
    "group": "model",
    "id": "Recraft",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Recraft"
  },
  {
    "color": "#000",
    "desc": "Relace",
    "docsUrl": "relace",
    "fullTitle": "Relace",
    "group": "model",
    "id": "Relace",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Relace"
  },
  {
    "color": "#EA2805",
    "desc": "Replicate",
    "docsUrl": "replicate",
    "fullTitle": "Replicate",
    "group": "model",
    "id": "Replicate",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Replicate"
  },
  {
    "color": "#FD5402",
    "desc": "Replit",
    "docsUrl": "replit",
    "fullTitle": "Replit",
    "group": "model",
    "id": "Replit",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Replit"
  },
  {
    "color": "#000",
    "desc": "Reve",
    "docsUrl": "reve",
    "fullTitle": "Reve",
    "group": "model",
    "id": "Reve",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Reve"
  },
  {
    "color": "#000",
    "desc": "RooCode",
    "docsUrl": "roo-code",
    "fullTitle": "RooCode",
    "group": "model",
    "id": "RooCode",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "RooCode"
  },
  {
    "color": "#fff",
    "desc": "Runway",
    "docsUrl": "runway",
    "fullTitle": "Runway",
    "group": "model",
    "id": "Runway",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Runway"
  },
  {
    "color": "#3431C3",
    "colorGradient": "linear-gradient(to left, #1D1A5C, #3431C3, #7361F7)",
    "desc": "RWKV",
    "docsUrl": "rwkv",
    "fullTitle": "RWKV",
    "group": "model",
    "id": "Rwkv",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "RWKV"
  },
  {
    "color": "#EE7624",
    "desc": "SambaNova",
    "docsUrl": "samba-nova",
    "fullTitle": "SambaNova",
    "group": "model",
    "id": "SambaNova",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "SambaNova"
  },
  {
    "color": "#0066FF",
    "desc": "Search1API",
    "docsUrl": "search1-api",
    "fullTitle": "Search1API",
    "group": "model",
    "id": "Search1API",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Search1API"
  },
  {
    "color": "#4f46e5",
    "desc": "SearchApi",
    "docsUrl": "search-api",
    "fullTitle": "SearchApi",
    "group": "model",
    "id": "SearchApi",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "SearchApi"
  },
  {
    "color": "#5B2AD8",
    "desc": "SenseNova",
    "docsUrl": "sense-nova",
    "fullTitle": "SenseNova",
    "group": "model",
    "id": "SenseNova",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "SenseNova"
  },
  {
    "color": "#6E29F6",
    "desc": "SiliconCloud",
    "docsUrl": "silicon-cloud",
    "fullTitle": "SiliconCloud",
    "group": "model",
    "id": "SiliconCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "SiliconCloud"
  },
  {
    "color": "#fff",
    "desc": "Skywork",
    "docsUrl": "skywork",
    "fullTitle": "Skywork",
    "group": "model",
    "id": "Skywork",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Skywork"
  },
  {
    "color": "#EA580C",
    "desc": "Smithery",
    "docsUrl": "smithery",
    "fullTitle": "Smithery",
    "group": "model",
    "id": "Smithery",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Smithery"
  },
  {
    "color": "#249EDC",
    "desc": "Snowflake",
    "docsUrl": "snowflake",
    "fullTitle": "Snowflake",
    "group": "model",
    "id": "Snowflake",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Snowflake"
  },
  {
    "color": "#6200ee",
    "desc": "SophNet",
    "docsUrl": "soph-net",
    "fullTitle": "SophNet",
    "group": "model",
    "id": "SophNet",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "SophNet"
  },
  {
    "color": "#0968DA",
    "colorGradient": "linear-gradient(180deg, #012659 0%, #0968DA 100%)",
    "desc": "Sora",
    "docsUrl": "sora",
    "fullTitle": "Sora",
    "group": "model",
    "id": "Sora",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Sora"
  },
  {
    "color": "#0070f0",
    "desc": "Spark",
    "docsUrl": "spark",
    "fullTitle": "Spark",
    "group": "model",
    "id": "Spark",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Spark"
  },
  {
    "color": "#330066",
    "colorGradient": "linear-gradient(to bottom, #9D39FF,  #A380FF)",
    "desc": "Stability",
    "docsUrl": "stability",
    "fullTitle": "Stability",
    "group": "model",
    "id": "Stability",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Stability"
  },
  {
    "color": "#DF0428",
    "desc": "StateCloud",
    "docsUrl": "state-cloud",
    "fullTitle": "StateCloud",
    "group": "model",
    "id": "StateCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "StateCloud"
  },
  {
    "color": "#005AFF",
    "colorGradient": "linear-gradient(-45deg, #0160FF, #01A9FF)",
    "desc": "Stepfun",
    "docsUrl": "stepfun",
    "fullTitle": "Stepfun",
    "group": "model",
    "id": "Stepfun",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Stepfun"
  },
  {
    "color": "#464bba",
    "desc": "Straico",
    "docsUrl": "straico",
    "fullTitle": "Straico",
    "group": "model",
    "id": "Straico",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Straico"
  },
  {
    "color": "#1D70FF",
    "desc": "StreamLake",
    "docsUrl": "stream-lake",
    "fullTitle": "StreamLake",
    "group": "model",
    "id": "StreamLake",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "StreamLake"
  },
  {
    "color": "#fff",
    "desc": "SubModel",
    "docsUrl": "sub-model",
    "fullTitle": "SubModel",
    "group": "model",
    "id": "SubModel",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "SubModel"
  },
  {
    "color": "#000",
    "desc": "Suno",
    "docsUrl": "suno",
    "fullTitle": "Suno",
    "group": "model",
    "id": "Suno",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Suno"
  },
  {
    "color": "#0000FF",
    "desc": "Sync",
    "docsUrl": "sync",
    "fullTitle": "Sync",
    "group": "model",
    "id": "Sync",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Sync"
  },
  {
    "color": "#6400FF",
    "desc": "Technology Innovation Institute",
    "docsUrl": "tii",
    "fullTitle": "Technology Innovation Institute",
    "group": "model",
    "id": "TII",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Technology Innovation Institute"
  },
  {
    "color": "#68C3FF",
    "desc": "Targon",
    "docsUrl": "targon",
    "fullTitle": "Targon",
    "group": "model",
    "id": "Targon",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Targon"
  },
  {
    "color": "#fff",
    "desc": "Tavily",
    "docsUrl": "tavily",
    "fullTitle": "Tavily",
    "group": "model",
    "id": "Tavily",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Tavily"
  },
  {
    "color": "#0052D9",
    "desc": "Tencent",
    "docsUrl": "tencent",
    "fullTitle": "Tencent",
    "group": "model",
    "id": "Tencent",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true,
      "hasTextColor": false
    },
    "title": "Tencent"
  },
  {
    "color": "#2151d1",
    "desc": "TencentCloud",
    "docsUrl": "tencent-cloud",
    "fullTitle": "TencentCloud",
    "group": "model",
    "id": "TencentCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "TencentCloud"
  },
  {
    "color": "#0057ff",
    "colorGradient": "linear-gradient(to right, #6865FC, #467DF9)",
    "desc": "Tiangong",
    "docsUrl": "tiangong",
    "fullTitle": "Tiangong",
    "group": "model",
    "id": "Tiangong",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Tiangong"
  },
  {
    "color": "#fff",
    "desc": "together.ai",
    "docsUrl": "together",
    "fullTitle": "together.ai",
    "group": "model",
    "id": "Together",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "together.ai"
  },
  {
    "color": "#000",
    "desc": "TopazLabs",
    "docsUrl": "topaz-labs",
    "fullTitle": "TopazLabs",
    "group": "model",
    "id": "TopazLabs",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "TopazLabs"
  },
  {
    "color": "#32F08C",
    "desc": "TRAE",
    "docsUrl": "trae",
    "fullTitle": "TRAE",
    "group": "model",
    "id": "Trae",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "TRAE"
  },
  {
    "color": "#000",
    "desc": "Tripo",
    "docsUrl": "tripo",
    "fullTitle": "Tripo",
    "group": "model",
    "id": "Tripo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Tripo"
  },
  {
    "color": "#F7AD8A",
    "colorGradient": "linear-gradient(-45deg, #FAD076, #F7AD8A, #C768B9)",
    "desc": "TuriX",
    "docsUrl": "turi-x",
    "fullTitle": "TuriX",
    "group": "model",
    "id": "TuriX",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "TuriX"
  },
  {
    "color": "#e30a5d",
    "desc": "Udio",
    "docsUrl": "udio",
    "fullTitle": "Udio",
    "group": "model",
    "id": "Udio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Udio"
  },
  {
    "color": "#0ADDF8",
    "desc": "Unstructured",
    "docsUrl": "unstructured",
    "fullTitle": "Unstructured",
    "group": "model",
    "id": "Unstructured",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Unstructured"
  },
  {
    "color": "#908AF9",
    "colorGradient": "linear-gradient(to bottom, #AEBCFE,  #805DFA)",
    "desc": "Upsate",
    "docsUrl": "upstage",
    "fullTitle": "Upsate",
    "group": "model",
    "id": "Upstage",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Upsate"
  },
  {
    "color": "#000",
    "desc": "V0",
    "docsUrl": "v-0",
    "fullTitle": "V0",
    "group": "model",
    "id": "V0",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": false,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "V0"
  },
  {
    "color": "#3659FF",
    "desc": "Vectorizer.AI",
    "docsUrl": "vectorizer-ai",
    "fullTitle": "Vectorizer.AI",
    "group": "model",
    "id": "VectorizerAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Vectorizer.AI"
  },
  {
    "color": "#000",
    "desc": "Vercel",
    "docsUrl": "vercel",
    "fullTitle": "Vercel",
    "group": "model",
    "id": "Vercel",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Vercel"
  },
  {
    "color": "#4285F4",
    "desc": "VertexAI",
    "docsUrl": "vertex-ai",
    "fullTitle": "VertexAI",
    "group": "model",
    "id": "VertexAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "VertexAI"
  },
  {
    "color": "#22D5FF",
    "colorGradient": "linear-gradient(to right, #40EDD8, #22D5FF, #047FFE)",
    "desc": "Vidu",
    "docsUrl": "vidu",
    "fullTitle": "Vidu",
    "group": "model",
    "id": "Vidu",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Vidu"
  },
  {
    "color": "#000",
    "desc": "Viggle",
    "docsUrl": "viggle",
    "fullTitle": "Viggle",
    "group": "model",
    "id": "Viggle",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Viggle"
  },
  {
    "color": "#fff",
    "desc": "vLLM",
    "docsUrl": "vllm",
    "fullTitle": "vLLM",
    "group": "model",
    "id": "Vllm",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "vLLM"
  },
  {
    "color": "#fff",
    "desc": "Volcengine",
    "docsUrl": "volcengine",
    "fullTitle": "Volcengine",
    "group": "model",
    "id": "Volcengine",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Volcengine"
  },
  {
    "color": "#012E33",
    "desc": "Voyage",
    "docsUrl": "voyage",
    "fullTitle": "Voyage",
    "group": "model",
    "id": "Voyage",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Voyage"
  },
  {
    "color": "#167ADF",
    "colorGradient": "linear-gradient(to right, #0A51C3,  #23A4FB)",
    "desc": "Wenxin",
    "docsUrl": "wenxin",
    "fullTitle": "Wenxin",
    "group": "model",
    "id": "Wenxin",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Wenxin"
  },
  {
    "color": "#fff",
    "desc": "Windsurf",
    "docsUrl": "windsurf",
    "fullTitle": "Windsurf",
    "group": "model",
    "id": "Windsurf",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Windsurf"
  },
  {
    "color": "#F38020",
    "desc": "WorkersAI",
    "docsUrl": "workers-ai",
    "fullTitle": "WorkersAI",
    "group": "model",
    "id": "WorkersAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "WorkersAI"
  },
  {
    "color": "#fff",
    "desc": "Grok",
    "docsUrl": "xai",
    "fullTitle": "Grok",
    "group": "model",
    "id": "XAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Grok"
  },
  {
    "color": "#000",
    "desc": "XiaomiMiMo",
    "docsUrl": "xiaomi-mi-mo",
    "fullTitle": "XiaomiMiMo",
    "group": "model",
    "id": "XiaomiMiMo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "XiaomiMiMo"
  },
  {
    "color": "#781ff5",
    "desc": "Xinference",
    "docsUrl": "xinference",
    "fullTitle": "Xinference",
    "group": "model",
    "id": "Xinference",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Xinference"
  },
  {
    "color": "#0F1C4D",
    "desc": "xpay",
    "docsUrl": "xpay",
    "fullTitle": "xpay",
    "group": "model",
    "id": "Xpay",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "xpay"
  },
  {
    "color": "#fff",
    "desc": "轩辕",
    "docsUrl": "xuanyuan",
    "fullTitle": "轩辕",
    "group": "model",
    "id": "Xuanyuan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "轩辕"
  },
  {
    "color": "#FB3E1C",
    "desc": "Yandex",
    "docsUrl": "yandex",
    "fullTitle": "Yandex",
    "group": "model",
    "id": "Yandex",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Yandex"
  },
  {
    "color": "#003425",
    "desc": "Yi",
    "docsUrl": "yi",
    "fullTitle": "Yi",
    "group": "model",
    "id": "Yi",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Yi"
  },
  {
    "color": "#000",
    "desc": "YouMind",
    "docsUrl": "you-mind",
    "fullTitle": "YouMind",
    "group": "model",
    "id": "YouMind",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "YouMind"
  },
  {
    "color": "#fff",
    "desc": "Yuanbao",
    "docsUrl": "yuanbao",
    "fullTitle": "Yuanbao",
    "group": "model",
    "id": "Yuanbao",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Yuanbao"
  },
  {
    "color": "#000",
    "desc": "Z.ai",
    "docsUrl": "zai",
    "fullTitle": "Z.ai",
    "group": "model",
    "id": "ZAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Z.ai"
  },
  {
    "color": "#FF4F00",
    "desc": "Zapier",
    "docsUrl": "zapier",
    "fullTitle": "Zapier",
    "group": "model",
    "id": "Zapier",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Zapier"
  },
  {
    "color": "#6300FF",
    "desc": "Zeabur",
    "docsUrl": "zeabur",
    "fullTitle": "Zeabur",
    "group": "model",
    "id": "Zeabur",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Zeabur"
  },
  {
    "color": "#000",
    "desc": "ZenMux",
    "docsUrl": "zen-mux",
    "fullTitle": "ZenMux",
    "group": "model",
    "id": "ZenMux",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "ZenMux"
  },
  {
    "color": "#E65C2C",
    "desc": "Zencoder",
    "docsUrl": "zencoder",
    "fullTitle": "Zencoder",
    "group": "model",
    "id": "Zencoder",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Zencoder"
  },
  {
    "color": "#003425",
    "desc": "01.AI",
    "docsUrl": "zero-one",
    "fullTitle": "01.AI",
    "group": "model",
    "id": "ZeroOne",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "01.AI"
  },
  {
    "color": "#3859FF",
    "desc": "Zhipu",
    "docsUrl": "zhipu",
    "fullTitle": "Zhipu",
    "group": "model",
    "id": "Zhipu",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false,
      "hasTextColor": false
    },
    "title": "Zhipu"
  }
]

export default toc;