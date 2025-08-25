.PHONY: install server build prod lint clean

PORT ?= 7999

install:
	yarn install

server: install
	PORT=$(PORT) yarn next dev

build: install
	yarn build

prod: build
	yarn next start -p $(PORT)

lint: install
	yarn next lint

clean:
	rm -rf .next
	rm -rf out
	rm -rf node_modules
	rm -rf .yarn
	rm -f yarn.lock
	rm -f *.tsbuildinfo
	yarn cache clean

