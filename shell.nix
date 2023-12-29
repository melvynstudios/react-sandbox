{ pkgs ? import <nixpkgs> {} }:

let
  flake = builtins.getFlake (toString ./.);
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    flake.inputs.nixpkgs.legacyPackages.${pkgs.system}.nodejs
    # Add other packages here if needed
  ];

  shellHook = flake.devShell.${pkgs.system}.shellHook;
}