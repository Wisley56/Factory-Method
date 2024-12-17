import { EditorDOCX, EditorPDF, EditorTXT, EditorXLSX } from "./classes_editores";

function gerenciarArquivo() {
    console.log('Gerenciando arquivos PDF:');
    const editorPDF = new EditorPDF();
    editorPDF.criarArquivo();
  
    console.log('\nGerenciando arquivos DOCX:');
    const editorDOCX = new EditorDOCX();
    editorDOCX.criarArquivo();
  
    console.log('\nGerenciando arquivos XLSX:');
    const editorXLSX = new EditorXLSX();
    editorXLSX.criarArquivo();
  
    console.log('\nGerenciando arquivos TXT:');
    const editorTXT = new EditorTXT();
    editorTXT.criarArquivo();
  }
  
  gerenciarArquivo();
  