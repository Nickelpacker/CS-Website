import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all img src attributes - match from src=" to the next " before alt=
# This handles very long base64 strings
content = re.sub(r'(<img[^>]*\s+)src="[^"]*"', r'\1src=""', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed all image src attributes")
