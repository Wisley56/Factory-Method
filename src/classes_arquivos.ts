import { Arquivo } from './arquivo'

export class ArquivoPDF implements Arquivo {
    abrir(): void {
      console.log('Abrindo arquivo PDF...')
    }
  
    salvar(): void {
      console.log('Salvando arquivo PDF...')
    }
  }
  
  export class ArquivoDOCX implements Arquivo {
    abrir(): void {
      console.log('Abrindo arquivo DOCX...')
    }
  
    salvar(): void {
      console.log('Salvando arquivo DOCX...')
    }
  }
  
  export class ArquivoXLSX implements Arquivo {
    abrir(): void {
      console.log('Abrindo arquivo XLSX...')
    }
  
    salvar(): void {
      console.log('Salvando arquivo XLSX...')
    }
  }
  
  export class ArquivoTXT implements Arquivo {
    abrir(): void {
      console.log('Abrindo arquivo TXT...')
    }
  
    salvar(): void {
      console.log('Salvando arquivo TXT...')
    }
  }
  