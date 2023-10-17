import useSigner from "@/src/state/signer";

const ConnectButton = () => {
  const { address, loading, connectWallet } = useSigner();

  return (
    <button
      className="flex h-10 w-36 items-center justify-center rounded-full bg-black px-4 font-semibold text-white"
      onClick={connectWallet}
      disabled={loading}
    >
      {address ? (
        <>
          <span>
            Connected: {address.slice(0, 4)}...{address.slice(-4)}
          </span>
        </>
      ) : (
        <>{loading ? "Busy..." : "Connect Wallet"}</>
      )}
    </button>
  );
};

export default ConnectButton;
