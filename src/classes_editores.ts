import { Arquivo } from './arquivo'
import { ArquivoDOCX, ArquivoPDF, ArquivoTXT, ArquivoXLSX } from "./classes_arquivos";
import { EditorArquivo } from "./editor_arquivo";


export class EditorPDF extends EditorArquivo {
    criarArquivo(): Arquivo {
      return new ArquivoPDF();
    }
  }
  
  export class EditorDOCX extends EditorArquivo {
    criarArquivo(): Arquivo {
      return new ArquivoDOCX();
    }
  }
  
  export class EditorXLSX extends EditorArquivo {
    criarArquivo(): Arquivo {
      return new ArquivoXLSX();
    }
  }
  
  export class EditorTXT extends EditorArquivo {
    criarArquivo(): Arquivo {
      return new ArquivoTXT();
    }
  }
  