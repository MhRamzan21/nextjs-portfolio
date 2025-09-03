import { Card, CardContent } from "@/components/ui/card";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function ContactInfo() {
  const contacts = [
    {
      icon: SiGmail,
      label: "Email",
      value: "mhmd.ramzan220",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+92 3478452902",
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      value: "mhramzan",
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "MhRamzan21",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {contacts.map((contact, i) => (
        <Card key={i} className="p-0 border hover:border-[var(--brand)] shadow-md">
          <CardContent className="flex items-center gap-4 p-4">
            <contact.icon className="w-6 h-6 text-[var(--brand)]" />
            <div>
              <h4 className="dark:text-zinc-300 text-zinc-700 font-medium">{contact.label}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 cursor-pointer hover:text-[var(--brand)] text-sm">{contact.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { ContactInfo };
