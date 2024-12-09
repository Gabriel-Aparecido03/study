# Bubble Sort

O **Bubble Sort** é um algoritmo de ordenação simples, mas eficiente para conjuntos pequenos de dados. Ele funciona comparando repetidamente pares de elementos adjacentes em uma lista e trocando-os se estiverem fora de ordem. Esse processo é repetido até que a lista esteja completamente ordenada.

## 🚀 Como funciona

1. O algoritmo percorre a lista do início ao fim.
2. Compara cada par de elementos adjacentes.
3. Se o elemento atual for maior que o próximo, eles são trocados.
4. O maior elemento "sobe" para o final da lista, como uma bolha na água.
5. O processo é repetido para os elementos restantes, excluindo os já ordenados, até que a lista esteja completamente ordenada.

## 💻 Implementação (Exemplo em Python)

```python
def bubble_sort(lista):
    n = len(lista)
    for i in range(n):
        # Percorre a lista até o último elemento não ordenado
        for j in range(0, n - i - 1):
            # Troca os elementos se estiverem fora de ordem
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
    return lista

# Exemplo de uso
numeros = [64, 34, 25, 12, 22, 11, 90]
print("Lista ordenada:", bubble_sort(numeros))
```

## 🧩 Complexidade

- **Melhor caso**: \( O(n) \) - quando a lista já está ordenada.
- **Caso médio**: \( O(n^2) \).
- **Pior caso**: \( O(n^2) \) - quando a lista está na ordem inversa.
- **Espaço adicional**: \( O(1) \) - é um algoritmo in-place.

## 📚 Características

- Simples de entender e implementar.
- Não é eficiente para grandes listas.
- Estável: mantém a ordem relativa dos elementos iguais.
- Utilizado principalmente para fins educacionais.

## 🔧 Como usar este algoritmo

1. Copie o código da função `bubble_sort` para seu projeto.
2. Chame a função passando uma lista como argumento.
3. Receba a lista ordenada como retorno.

## 🌟 Exemplo de saída

Entrada: `[64, 34, 25, 12, 22, 11, 90]`  
Saída: `[11, 12, 22, 25, 34, 64, 90]`