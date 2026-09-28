FROM mcr.microsoft.com/devcontainers/javascript-node:24

# CSP 違反・アクセシビリティ・Core Web Vitals をヘッドレスブラウザで検証するため。
# fonts-noto-cjk はスクリーンショットで日本語を描画するために必要
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        chromium \
        fonts-noto-cjk \
    && rm -rf /var/lib/apt/lists/*

# Lighthouse 等のツールが参照するブラウザのパス
ENV CHROME_PATH=/usr/bin/chromium
