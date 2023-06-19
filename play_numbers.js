import {obter_numero, mostrar_texto, obter_numero_positivo, limpar_tela} from "../utils/my_utils.js"
import { calcular_media_mediana, contar_numeros_positivos_negativos_zeros, elevar_vetores_potencia_n, 
eliminar_multiplos_M_N, gerar_grupos, gerar_posicao, maior_e_menor_numero, menu, mostrar_frase_bye, mostrar_media_detalhada, 
ordenar_crescente, ordenar_decrescente, preencher_vetor_automaticamente, preencher_vetor_manualmente, 
somar_numeros_colecao, sorteio_num_negativo, sorteio_num_positivo, sum_media_positivo_pares_negativos_pares, top_N_maiores_numeros, top_N_menores_numeros, verificar_presenca } from "./play_numbers_features.js"

function main(){
    // Entrada
    const opcoes = menu()

    // Processamento
    let escolha = obter_numero(`${opcoes}\n`)
    let numeros = []
    let contar_numeros
    let num_soma
    let qtd_num
    let maior_menor_num
    let sortear_num_positivo
    let sortear_num_negativo
    let minimo
    let maximo
    
    while(escolha !== 0){
        if(escolha == 1){
            qtd_num = gerar_posicao(numeros)
        }else if(escolha == 2){
            numeros = preencher_vetor_manualmente(qtd_num, numeros)
        }else if(escolha == 3){
            minimo = obter_numero('Insira o valor minimo de sua colecao: ')
            maximo = obter_numero('Insira o valor maximo de sua colecao: ')
            numeros = preencher_vetor_automaticamente(minimo, maximo, qtd_num, numeros)
        }else if(escolha == 4){
            mostrar_texto(numeros)
        }else if(escolha == 5){
            const potencia = obter_numero('Qual o valor da potencia N? ')
            let num_elevado = elevar_vetores_potencia_n(numeros, potencia)
            mostrar_texto(num_elevado)
        }else if(escolha == 6){
            contar_numeros = contar_numeros_positivos_negativos_zeros(numeros)
        }else if(escolha == 7){
            num_soma = somar_numeros_colecao(numeros)
        } else if(escolha == 9){
            maior_menor_num = maior_e_menor_numero(numeros)
        }else if(escolha == 8){
            let media_mediana = calcular_media_mediana(numeros)
        }else if(escolha == 10){
            sortear_num_positivo = sorteio_num_positivo(numeros)
            sortear_num_negativo = sorteio_num_negativo(numeros)
        }else if(escolha == 13){
            let maiores_vetores = obter_numero_positivo('Insira o top N maiores numeros: ')
            top_N_maiores_numeros(numeros, maiores_vetores)
        }else if(escolha == 14){
            let menores_vetores = obter_numero_positivo('Insira o top N menores numeros: ')
            top_N_menores_numeros(numeros, menores_vetores)
        }else if(escolha == 15){
            let media_detalhada = mostrar_media_detalhada(numeros)
        }else if(escolha == 17){
            let soma_pos_neg_pares_metade = sum_media_positivo_pares_negativos_pares(numeros)
        }else if(escolha == 18){
            let crescente = ordenar_crescente(numeros)
            mostrar_texto(crescente)
        }else if(escolha == 19){
            let decrescente = ordenar_decrescente(numeros)
            mostrar_texto(decrescente)
        }else if(escolha == 20){
            let N = obter_numero_positivo('Insira o N: ')
            let M = obter_numero_positivo('Insira o M: ')
            let eliminar_multiplos = eliminar_multiplos_M_N(numeros, N, M)
        }else if(escolha == 11){
            let N = obter_numero_positivo('Insira o N: ')
            let T = obter_numero_positivo('Insira o T: ')
            gerar_grupos(N, T, minimo, maximo)
        }else if(escolha == 12){
            verificar_presenca(numeros)
        }

        // Repetir ciclo
        limpar_tela()
        escolha = obter_numero(`${opcoes}\n`)
    }
    mostrar_texto(mostrar_frase_bye())
}

main()
