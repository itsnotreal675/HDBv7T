const help = (prefix) => {
	return `> *HDB BOTv5.7 Segue os comandos bb* <
comando : *${prefix}sticker* ou *${prefix}stiker*
descrição : converter imagem / gif / vídeo em figurinhas 
como usar : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com o comando relatado acima\n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
descrição : converter imagem em adesivo removendo o fundo
como usar : marque a imagem, ou envie usando o comando descrito acima\n
comando : *${prefix}toimg*
descrição  : converter figurinha em imagem
como usar : marque a figurinha com o comando\n
comando : *${prefix}tsticker* ou *${prefix}tstiker*
> *Outros comandos* <
comando : *${prefix}gtts*
descrição : converter texto em fala / áudio
como usar : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts pt cade a chave da canoa paulin?*\n
comando : *${prefix}wait*
descrição : procurar anime por foto [ What Anime Is This/That ]
como usar : responder imagem ou enviar imagem com a legenda\n
> *Comandos para grupo* <
comando : *${prefix}tagall*
descrição : marca todos os membros do grupo, incluindo admins
como usar : apenas envie o comando
nota : Este comando pode ser usado se você for um admin do grupo\n
}

exports.help = help


