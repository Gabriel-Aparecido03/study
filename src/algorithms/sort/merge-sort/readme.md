# Merge Sort  

O **Merge Sort** é um algoritmo de ordenação eficiente que segue a abordagem de **divisão e conquista**. Ele divide recursivamente uma lista em sublistas menores, ordena essas sublistas e as combina de maneira ordenada para formar a lista final.  

## 🚀 Como funciona  

1. **Divisão**: A lista é dividida repetidamente ao meio até que cada sublista tenha apenas um elemento.  
2. **Ordenação e Fusão (Merge)**: As sublistas são combinadas duas a duas, ordenadas em cada passo até formar uma única lista completamente ordenada.  

### Exemplo visual

Entrada: `[38, 27, 43, 3, 9, 82, 10]`  

1. Divisão:  
   `[38, 27, 43, 3, 9, 82, 10]` → `[38, 27, 43]` e `[3, 9, 82, 10]`  
   `[38, 27, 43]` → `[38]`, `[27]` e `[43]`  
   `[3, 9, 82, 10]` → `[3]`, `[9]`, `[82]` e `[10]`  

2. Fusão:  
   `[38]` e `[27]` → `[27, 38]`  
   `[27, 38]` e `[43]` → `[27, 38, 43]`  
   `[3]` e `[9]` → `[3, 9]`  
   `[82]` e `[10]` → `[10, 82]`  
   `[3, 9]` e `[10, 82]` → `[3, 9, 10, 82]`  
   `[27, 38, 43]` e `[3, 9, 10, 82]` → `[3, 9, 10, 27, 38, 43, 82]`  

Saída: `[3, 9, 10, 27, 38, 43, 82]`  

## 💻 Implementação (Python)  

```python
def merge_sort(lista):
    if len(lista) > 1:
        meio = len(lista) // 2
        esquerda = lista[:meio]
        direita = lista[meio:]
        
        # Ordena as duas metades recursivamente
        merge_sort(esquerda)
        merge_sort(direita)
        
        i = j = k = 0
        
        # Combina as duas metades ordenadas
        while i < len(esquerda) and j < len(direita):
            if esquerda[i] < direita[j]:
                lista[k] = esquerda[i]
                i += 1
            else:
                lista[k] = direita[j]
                j += 1
            k += 1
        
        # Adiciona os elementos restantes da esquerda
        while i < len(esquerda):
            lista[k] = esquerda[i]
            i += 1
            k += 1
        
        # Adiciona os elementos restantes da direita
        while j < len(direita):
            lista[k] = direita[j]
            j += 1
            k += 1

    return lista

# Exemplo de uso
numeros = [38, 27, 43, 3, 9, 82, 10]
print("Lista ordenada:", merge_sort(numeros))
```

## 🧩 Complexidade  

- **Melhor caso**: \( O(n \log n) \).  
- **Caso médio**: \( O(n \log n) \).  
- **Pior caso**: \( O(n \log n) \).  
- **Espaço adicional**: \( O(n) \) - devido à necessidade de armazenar sublistas temporárias.  

## 📚 Características  

- **Estável**: mantém a ordem relativa de elementos iguais.  
- Divide a lista mesmo que já esteja ordenada.  
- Adequado para lidar com grandes conjuntos de dados devido à sua eficiência.  

## 🌟 Exemplo de saída  

Entrada: `[38, 27, 43, 3, 9, 82, 10]`  
Saída: `[3, 9, 10, 27, 38, 43, 82]`  
