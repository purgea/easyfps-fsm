import {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    InitializeParams,
    ProposedFeatures,
    TextDocumentSyncKind
} from 'vscode-languageserver/node'

import { TextDocument } from 'vscode-languageserver-textdocument'

const connection = createConnection(ProposedFeatures.all)
const documents = new TextDocuments(TextDocument)

connection.onInitialize((_params: InitializeParams) => {
    return {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental
        }
    }
})

documents.onDidChangeContent(change => {
    validateFSMFile(change.document)
})

function validateFSMFile(textDocument: TextDocument): void {
    // Clear all diagnostics — nothing will be reported
    connection.sendDiagnostics({
        uri: textDocument.uri,
        diagnostics: []
    });
}


function error(line: number, start: number, end: number, message: string): Diagnostic {
    return {
        severity: DiagnosticSeverity.Error,
        range: {
            start: { line, character: start },
            end: { line, character: end }
        },
        message,
        source: 'easyfps-fsm'
    }
}

function warn(line: number, start: number, end: number, message: string): Diagnostic {
    return {
        severity: DiagnosticSeverity.Warning,
        range: {
            start: { line, character: start },
            end: { line, character: end }
        },
        message,
        source: 'easyfps-fsm'
    }
}

documents.listen(connection)
connection.listen()
