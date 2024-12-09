# Radix Sort
🚀 Como funciona

    Determine o número máximo de dígitos entre os elementos.
    Para cada posição de dígito, organize os elementos usando Counting Sort como sub-rotina.

💻 Implementação (Exemplo em Python)

def counting_sort_radix(lista, exp):
    n = len(lista)
    output = [0] * n
    count = [0] * 10

    for i in lista:
        index = (i // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in reversed(range(n)):
        index = (lista[i] // exp) % 10
        output[count[index] - 1] = lista[i]
        count[index] -= 1

    for i in range(n):
        lista[i] = output[i]

def radix_sort(lista):
    maximo = max(lista)
    exp = 1
    while maximo // exp > 0:
        counting_sort_radix(lista, exp)
        exp *= 10

## Exemplo de uso
numeros = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(numeros)
print("Lista ordenada:", numeros)

🧩 Complexidade

    Tempo: O(n⋅k)O(n⋅k), onde kk é o número de dígitos do maior elemento.
    Espaço adicional: O(n+k)O(n+k).

📚 Características

    Não comparativo: ordena por posição dos dígitos.
    Funciona apenas com números inteiros.
    Estável: mantém a ordem relativa dos elementos iguais.

🔧 Como usar este algoritmo

    Copie a função radix_sort para seu projeto.
    Chame a função passando uma lista de números inteiros como argumento.
    Receba a lista ordenada como retorno.

🌟 Exemplo de saída

Entrada: [170, 45, 75, 90, 802, 24, 2, 66]
Saída: [2, 24, 45, 66, 75, 90, 170, 802]