# Counting Sort
🚀 Como funciona

    Determine o valor máximo na lista.
    Crie um array auxiliar para contar as ocorrências de cada valor.
    Use o array de contagem para construir a lista ordenada.

💻 Implementação (Exemplo em Python)

def counting_sort(lista):
    maior = max(lista)
    contagem = [0] * (maior + 1)
    
    for num in lista:
        contagem[num] += 1
    
    resultado = []
    for i, count in enumerate(contagem):
        resultado.extend([i] * count)
    
    return resultado

## Exemplo de uso
numeros = [4, 2, 2, 8, 3, 3, 1]
print("Lista ordenada:", counting_sort(numeros))

🧩 Complexidade

    Tempo: O(n+k)O(n+k), onde kk é o valor máximo na lista.
    Espaço adicional: O(k)O(k).

📚 Características

    Não comparativo: não realiza comparações entre os elementos.
    Não estável (mas pode ser modificado para ser estável).
    Requer valores inteiros e positivos.

🔧 Como usar este algoritmo

    Copie a função counting_sort para seu projeto.
    Chame a função passando uma lista de números inteiros como argumento.
    Receba a lista ordenada como retorno.

🌟 Exemplo de saída

Entrada: [4, 2, 2, 8, 3, 3, 1]
Saída: [1, 2, 2, 3, 3, 4, 8]