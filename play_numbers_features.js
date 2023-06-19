import {mostrar_texto, obter_numero, obter_numero_positivo} from "../utils/my_utils.js"
import { quicksort } from "../testes/quicksort.js"
export function menu(){
    let menu = '*****PLAY NUMBERS*****'
    menu += '\n-------------------------'
    menu += '\n [PRESSIONE 1] -> Gerar a quantidade de numeros'
    menu += '\n [PRESSIONE 2] -> Preencher colecao manualmente'
    menu += '\n [PRESSIONE 3] -> Preencher colecao automaticamente'
    menu += '\n [PRESSIONE 4] -> Mostrar seus numeros'
    menu += '\n [PRESSIONE 5] -> Elevar os numeros a potencia N'
    menu += '\n [PRESSIONE 6] -> Contar positivos, negativos e neutros'
    menu += '\n [PRESSIONE 7] -> Somatorio de todos os numeros, somente dos positivos e somente dos negativos'
    menu += '\n [PRESSIONE 8] -> Verificar media e mediana'
    menu += '\n [PRESSIONE 9] -> Verificar maior e menor numero'
    menu += '\n [PRESSIONE 10] -> Sortear um numero positivo e um negativo da sua lista'
    menu += '\n [PRESSIONE 11] -> Gerar N grupos de T tamanhos sem repetir valores'
    menu += '\n [PRESSIONE 12] -> Pedir um novo vetor e verificar se esta 100% presente nos números do sistema (e na mesma ordem)'
    menu += '\n [PRESSIONE 13] -> Mostrar top N maiores numeros'
    menu += '\n [PRESSIONE 14] -> Mostrar top N menores numeros'
    menu += '\n [PRESSIONE 15] -> Listar valor medio, e listar numeros maiores que a Media e Menores que a Media'
    menu += '\n [PRESSIONE 17] -> Somar media dos numeros positivos multiplos de dois com o produto acumulado da metade dos numeros negativos pares'
    menu += '\n [PRESSIONE 18] -> Ordenar numeros em ordem crescente'
    menu += '\n [PRESSIONE 19] -> Ordenar numeros em ordem decrescente'
    menu += '\n [PRESSIONE 20] -> Eliminar multiplos de N e M simultaneamente'
    menu += '\n [PRESSIONE 0] -> Sair'
    return menu
}

export function gerar_posicao(numeros){
    const N = obter_numero_positivo('Insira a quantidade de numeros que você deseja adicionar: ')
    numeros = Array(N)
    return numeros
}
export function preencher_vetor_manualmente(qtd_num, numeros){
    for(let i = 0; i < qtd_num.length; i++){
        let num = obter_numero('Insira um numero para completar a coleção: ')
        numeros[numeros.length] = num
    }
    return numeros
}
export function preencher_vetor_automaticamente(minimo, maximo, qtd_num, numeros){
    for(let i = 0; i < qtd_num.length; i++){
        let num_random = Math.floor(Math.random() * (maximo - minimo) + minimo)
        numeros[numeros.length] = num_random
    }
    return numeros
}
export function elevar_vetores_potencia_n(numeros, potencia){
    let exponenciacao = []
    for(let i = 0; i < numeros.length; i++){
        exponenciacao[i] = numeros[i]** potencia

    }
    return exponenciacao
}
export function contar_numeros_positivos_negativos_zeros(numeros){
    let negativos = 0
    let positivos = 0
    let neutros = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > 0){
             positivos++
        }else if(numeros[i] < 0){
             negativos++
        }else if(numeros[i] == 0){
            neutros++
        }
    }
    mostrar_texto(`\nNumeros positivos: ${positivos}`)
    mostrar_texto(`Numeros negativos: ${negativos}`)
    mostrar_texto(`Numeros neutros: ${neutros}`)
}
export function somar_numeros_colecao(numeros){
    let soma_total = 0
    let soma_positivos = 0
    let soma_negativos = 0
    for(let i = 0; i < numeros.length; i++){
        soma_total += numeros[i]
    
        if(numeros[i] > 0){
            soma_positivos += numeros[i]
        }
        else if(numeros[i] < 0)
        {soma_negativos += numeros[i]}
    }
    mostrar_texto(`\nSoma de todos os numeros: ${soma_total}`)
    mostrar_texto(`Soma dos numeros positivos: ${soma_positivos}`)
    mostrar_texto(`Soma dos numeros negativos: ${soma_negativos}`)
}
export function maior_e_menor_numero(numeros){
    let maior_num = numeros[0]
    let menor_num = numeros[0]
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maior_num){
            maior_num = numeros[i]
        }
        if(numeros[i] < menor_num){
            menor_num = numeros[i]
        }
    }
    mostrar_texto(`\nMaior numero: ${maior_num}`)
    mostrar_texto(`Menor numero: ${menor_num}`)
}
export function sorteio_num_positivo(numeros){
    const num_positivo = filtrar_positivos(numeros)
    const sorteio_num_positivo = Math.floor(Math.random() * num_positivo.length)
    const num_positivo_sorteado = num_positivo[sorteio_num_positivo]
    mostrar_texto(`O número positivo sorteado foi: ${num_positivo_sorteado}`)
}

export function sorteio_num_negativo(numeros){
    const num_negativo = filtrar_negativos(numeros)
    const sorteio_num_negativo = Math.floor(Math.random() * num_negativo.length)
    const num_negativo_sorteado = num_negativo[sorteio_num_negativo]
    mostrar_texto(`O número negativo sorteado foi: ${num_negativo_sorteado}`)
}

function filtrar_positivos(numeros){
    let numeros_positivos = []
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > 0){
            numeros_positivos.push(numeros[i])
        }
    }
    return numeros_positivos
}
function filtrar_negativos(numeros){
    let numeros_negativos = []
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            numeros_negativos.push(numeros[i])
        }
    }
    return numeros_negativos
}
export function top_N_maiores_numeros(numeros, maiores_vetores){
    const ordenar = quicksort_decrescente(numeros)
    const top_maiores = ordenar.slice(0,maiores_vetores)
    mostrar_texto(top_maiores)
}
function quicksort_decrescente(colecao) {
    if (colecao.length <= 1) {
      return colecao
    }
    const pivot = colecao[Math.floor(Math.random() * colecao.length)]
    const left = []
    const right = []
  
    for (let i = 0; i < colecao.length; i++) {
      if (pivot > colecao[i]) {
        left.push(colecao[i])
      } else if (pivot < colecao[i]) {
        right.push(colecao[i])
      }
    }
    
    return [...quicksort_decrescente(right), pivot, ...quicksort_decrescente(left)]
}
export function mostrar_frase_bye(){
    let frases = [
      'Ate logo meu bem :)',
      `bye bye, fica bem :)`,
      `ate mais, cuide-se! :)`,
      `Tchau, tenha um dia tao incrivel quanto voce :)`,
      `Ate mais, tenha uma boa semana :)`
    ]
  
    const indice_sorteado = Math.floor(Math.random() * frases.length)
    const frase_sorteada = frases[indice_sorteado]
  
    return frase_sorteada
}
export function top_N_menores_numeros(numeros, menores_vetores){
    const ordenar = quicksort(numeros)
    const top_menores = ordenar.slice(0,menores_vetores)
    mostrar_texto(top_menores)
}
export function mostrar_media_detalhada(numeros){
    let soma_total = 0
    for(let i = 0; i < numeros.length; i++){
        soma_total += numeros[i]
    }
    const media = soma_total/numeros.length
    const maiores = numeros.filter(x => x > media)
    const menores = numeros.filter(x => x < media)
    mostrar_texto(`Media: ${media}`)
    mostrar_texto(`Maiores que a media: ${maiores}`)
    mostrar_texto(`Menores que a media: ${menores}`)
}
export function sum_media_positivo_pares_negativos_pares(numeros){
    let somatorio = 0
    let contador = 1
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            somatorio += numeros[i]
            contador++
        }
    }
    const media_pos_pares = somatorio/contador
    const produto_neg_pares = calcular_produto_neg_pares(numeros)
    const soma_total = media_pos_pares + produto_neg_pares
    mostrar_texto(`Soma: ${soma_total.toFixed(2)}`)
}
function calcular_produto_neg_pares(numeros){
    let produto = 1
    for(let item of numeros){
        if(item < 0 && item % 2 == 0){
            produto *= (item/2)
        }
    }
    return produto
}
export function ordenar_crescente(numeros){
    return quicksort(numeros)
}
export function ordenar_decrescente(numeros){
    return quicksort_decrescente(numeros)
}
export function calcular_media_mediana(numeros){
    let soma_total = 0
    for(let i = 0; i < numeros.length; i++){
        soma_total += numeros[i]
    }
    const media = soma_total/numeros.length
    mostrar_texto(`Media: ${media}`)
    const ordenar = quicksort(numeros)
    if(ordenar.length % 2 == 0){
        const mediana = (ordenar[(ordenar.length / 2) + 1] + ordenar[(ordenar.length / 2)]) / 2
        mostrar_texto(`Mediana: ${mediana}`)
    }else{
        const mediana = ordenar[(ordenar.length + 1) / 2] 
        mostrar_texto(`Mediana: ${mediana}`)
    }
}
export function eliminar_multiplos_M_N(numeros, N, M){
    const eliminar = numeros.filter(x => x % N !== 0 && x % M !== 0)
    mostrar_texto(`Novo vetor: ${eliminar}`)
}
export function gerar_grupos(N, T, minimo, maximo){
        const totalValores = N * T
        const valores = []
      
        // Gere valores aleatórios únicos
        while (valores.length < totalValores) {
          const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
          if (!valores.includes(valor)) {
            valores.push(valor)
          }
        }
      
        // Embaralhe aleatoriamente o array de valores
        const valores_embaralhados = embaralhar_elementos(valores)
      
        // Divida os valores em N grupos de tamanho T
        const grupos = []
        for (let i = 0; i < N; i++) {
          const grupo = valores_embaralhados.slice(i * T, (i + 1) * T)
          grupos.push(grupo)
        }
      
        mostrar_texto(grupos)
}
function embaralhar_elementos(vetor) {
    const novo_array = vetor.slice()
    for (let i = novo_array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let valor_elementos = novo_array[i]
      novo_array[i] = novo_array[j]
      novo_array[j] = valor_elementos
    }
    return novo_array
}
function gerar_vetor_aleatorio(numeros) {
    const vetor_verificado = []
    const tamanho = Math.floor(Math.random() * 100)
    
    for (let i = 0; i < tamanho; i++) {
      const indice_aleatorio = Math.floor(Math.random() * numeros.length)
      vetor_verificado.push(numeros[indice_aleatorio])
    }
    
    return vetor_verificado
}  
export function verificar_presenca(numeros) {
    let indice_original = 0
    let indice_verificado = 0
    
    while (indice_original < numeros.length && indice_verificado < gerar_vetor_aleatorio(numeros).length) {
      if (numeros[indice_original] === gerar_vetor_aleatorio(numeros)[indice_verificado]) {
        indice_verificado++
      }
      indice_original++
    }
    
    mostrar_texto(gerar_vetor_aleatorio(numeros))
    
    if (indice_verificado === gerar_vetor_aleatorio(numeros).length) {
      mostrar_texto('Os vetores são idênticos.')
    } else {
      mostrar_texto('Os vetores não são idênticos.')
    }
}    