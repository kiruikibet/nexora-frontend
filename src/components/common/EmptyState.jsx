import Button from "./Button";

function EmptyState({ title, description, icon, buttonText, onButtonClick }) {
  return (
    <section className="flex w-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
        {description}
      </p>
      {buttonText ? (
        <div className="mt-6">
          <Button onClick={onButtonClick} variant="primary">
            {buttonText}
          </Button>
        </div>
      ) : null}
    </section>
  );
}

export default EmptyState;
