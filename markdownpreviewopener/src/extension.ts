import * as vscode from 'vscode';

function isMarkdownFile(doc: vscode.TextDocument) {
	const split = doc.fileName.split('.')
		.filter((substr) => substr !== "git");
	const fileExtension = split[split.length - 1];
	return fileExtension === "md" || doc.languageId === "markdown";
}

function openPreviewIfMarkdown(doc: vscode.TextDocument) {
	if (!isMarkdownFile(doc)) { return; }
	vscode.commands.executeCommand("markdown.showPreviewToSide");
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.workspace.onDidOpenTextDocument((doc: vscode.TextDocument) => {
		openPreviewIfMarkdown(doc);
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
