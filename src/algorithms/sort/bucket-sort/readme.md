# Bucket Sort
🚀 Como funciona

    Divida os elementos em baldes (buckets) com base em um intervalo predefinido.
    Ordene cada balde individualmente (geralmente usando Insertion Sort).
    Combine todos os baldes em uma lista ordenada.

💻 Implementação (Exemplo em Python)

def bucket_sort(lista):
    n = len(lista)
    if n == 0:
        return lista

    maximo = max(lista)
    tamanho = maximo / n
    buckets = [[] for _ in range(n)]
    
    for num in lista:
        index = int(num / tamanho)
        if index != n:
            buckets[index].append(num)
        else:
            buckets[n - 1].append(num)
    
    for i in range(n):
        buckets[i].sort()
    
    resultado = []
    for bucket in buckets:
        resultado.extend(bucket)
    
    return resultado

## Exemplo de uso
numeros = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47]
print("Lista ordenada:", bucket_sort(numeros))

🧩 Complexidade

    Melhor caso: O(n+k)O(n+k).
    Pior caso: O(n2)O(n2) (se todos os elementos forem colocados no mesmo balde).

📚 Características

    Estável: se a ordenação interna for estável.
    Requer conhecimento prévio sobre o intervalo dos dados.

🔧 Como usar este algoritmo

    Copie a função bucket_sort para seu projeto.
    Chame a função passando uma lista de números entre 00 e 11 como argumento.
    Receba a lista ordenada como retorno.

🌟 Exemplo de saída

Entrada: [0.42, 0.32, 0.23, 0.52, 0.25, 0.47]
Saída: [0.23, 0.25, 0.32, 0.42, 0.47, 0.52]