fake_sites = [
    "https://meubanco-fake.com",
    "https://insta-clone-login.net",
    "https://pagseguro-falso.org",
    "https://sistema-escola-online.xyz",
    "https://acesso-conta360.app",
    "https://meu-gmail-entrar.com.br",
    "https://netflix-login-seguro.net",
    "https://cadastro-premio2025.info",
    "https://recupera-senha-app.net",
    "https://app-gov-federal-login.com"
]


import pyautogui
import time
import random

time.sleep(5)
while True:
    pyautogui.write(fake_sites[random.randint(0, len(fake_sites) -1)])
    time.sleep(0.5)
    pyautogui.press('enter')
    time.sleep(2)