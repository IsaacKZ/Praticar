'''jogo de rolar dados'''

import random



dados = {

        0: """

┌─────────┐

│         │

│    o    │

│         │

└─────────┘
"""
,      
        1: """

┌─────────┐

│ o       │

│         │

│       o │

└─────────┘
"""
,
        2: """

┌─────────┐

│ o       │

│    o    │

│       o │

└─────────┘
"""
,
        3: """

┌─────────┐

│ o     o │

│         │

│ o     o │

└─────────┘
"""
,
        4: """

┌─────────┐

│ o     o │

│    o    │

│ o     o │

└─────────┘
"""
,
        5: """

┌─────────┐

│ o     o │

│ o     o │

│ o     o │

└─────────┘
"""

}

escolha = int(input("Escolha o número de vezes que deseja rolar os dados: \n"))

for i in range(escolha):

    print (dados[random.randint(0, 5)])