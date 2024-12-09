# Insertion Sort  

O **Insertion Sort** é um algoritmo de ordenação simples e eficiente para listas pequenas. Ele simula a forma como se organiza cartas em um baralho: os elementos são inseridos em suas posições corretas, um de cada vez, na parte já ordenada da lista.

## 🚀 Como funciona  

1. Começa assumindo que o primeiro elemento já está ordenado.  
2. Itera pelos demais elementos da lista, um de cada vez.  
3. Compara o elemento atual com os elementos anteriores e o insere na posição correta na parte ordenada.  
4. Repete até que toda a lista esteja ordenada.  

## 💻 Implementação (Exemplo em Python)  

```python
def insertion_sort(lista):
    for i in range(1, len(lista)):
        # O elemento a ser inserido na parte ordenada
        chave = lista[i]
        j = i - 1
        # Move os elementos da parte ordenada para a direita para abrir espaço
        while j >= 0 and lista[j] > chave:
            lista[j + 1] = lista[j]
            j -= 1
        # Insere o elemento na posição correta
        lista[j + 1] = chave
    return lista

# Exemplo de uso
numeros = [12, 11, 13, 5, 6]
print("Lista ordenada:", insertion_sort(numeros))
```

## 🧩 Complexidade  

- **Melhor caso**: \( O(n) \) - quando a lista já está ordenada.  
- **Caso médio**: \( O(n^2) \).  
- **Pior caso**: \( O(n^2) \) - quando a lista está na ordem inversa.  
- **Espaço adicional**: \( O(1) \) - é um algoritmo in-place.  

## 📚 Características  

- Simples e intuitivo de implementar.  
- Eficiente para listas pequenas ou quase ordenadas.  
- **Estável**: mantém a ordem relativa dos elementos iguais.  
- Não é eficiente para listas muito grandes devido à sua complexidade quadrática.  

## 🔧 Como usar este algoritmo  

1. Copie o código da função `insertion_sort` para o seu projeto.  
2. Chame a função passando uma lista como argumento.  
3. Receba a lista ordenada como retorno.  

## 🌟 Exemplo de saída  

Entrada: `[12, 11, 13, 5, 6]`  
Saída: `[5, 6, 11, 12, 13]`  