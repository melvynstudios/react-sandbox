{
  description = "A development environment for AWS Amplify with React and Node.js";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.git
            pkgs.awscli
            # Add other dependencies here
          ];

          shellHook = ''
            echo "Welcome to your ProjeX development environment"
            export PATH=$PATH:$HOME/.amplify/bin
          '';
        };
      });
}
