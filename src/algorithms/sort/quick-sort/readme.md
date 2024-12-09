# Quick Sort
🚀 Como funciona

    Escolha um pivô (geralmente o último elemento da lista).
    Particione a lista:
        Todos os elementos menores ou iguais ao pivô vão para a esquerda.
        Todos os elementos maiores vão para a direita.
    Recursivamente, aplique o Quick Sort nas sublistas da esquerda e da direita.
    Combine as sublistas ordenadas com o pivô.

💻 Implementação (Exemplo em Python)

def quick_sort(lista):
    if len(lista) <= 1:
        return lista
    pivô = lista[-1]
    menores = [x for x in lista[:-1] if x <= pivô]
    maiores = [x for x in lista[:-1] if x > pivô]
    return quick_sort(menores) + [pivô] + quick_sort(maiores)

## Exemplo de uso
numeros = [10, 7, 8, 9, 1, 5]
print("Lista ordenada:", quick_sort(numeros))

🧩 Complexidade

    Melhor caso e caso médio: O(nlog⁡n)O(nlogn)
    Pior caso: O(n2)O(n2) (quando o pivô é o menor ou maior elemento)

📚 Características

    Não estável: a posição relativa dos elementos iguais pode ser alterada.
    Muito eficiente em prática, mesmo com grandes listas.
    Funciona melhor com uma boa escolha de pivô (idealmente aleatório).

🔧 Como usar este algoritmo

    Copie a função quick_sort para seu projeto.
    Chame a função passando uma lista de números como argumento.
    Receba a lista ordenada como retorno.

🌟 Exemplo de saída

Entrada: [10, 7, 8, 9, 1, 5]
Saída: [1, 5, 7, 8, 9, 10]####