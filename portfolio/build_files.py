import os
import subprocess

def build():
    # Collect static files
    subprocess.run(
        ['python', 'manage.py', 'collectstatic', '--noinput'],
        check=True
    )

if __name__ == '__main__':
    build()
