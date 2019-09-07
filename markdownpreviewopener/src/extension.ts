import * as vscode from 'vscode';

function isMarkdownFile(doc: vscode.TextDocument) {
	const split = doc.fileName.split('.');
	const fileExtension = split[split.length - 1];
	return fileExtension === "md" || doc.languageId === "markdown";
}

export function activate(context: vscode.ExtensionContext) {
	vscode.workspace.onDidOpenTextDocument((doc: vscode.TextDocument) => {
		if (!isMarkdownFile(doc)) { return; }
		vscode.commands.executeCommand("markdown.showPreviewToSide");
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
